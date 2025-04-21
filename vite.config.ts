import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "development-tools",

      // ref: https://vite.dev/guide/api-plugin.html#transformindexhtml
      transformIndexHtml(html) {
        return [
          {
            tag: "script",
            attrs: { type: "module" },
            injectTo: "head",
            children: `
            // Log handling for development
            for (const method of ['log', 'debug', 'info', 'error', 'warn']) {
              const originalFn = console[method];
              console[method] = function(...args) {
                if (window.parent) {
                  try {
                    window.parent.postMessage({ type: 'console', method, args: args.map(a => \`\${a}\`) }, '*');
                  } catch (e) {
                    // Silently fail if posting message fails
                  }
                }
                return originalFn(...args);
              };
            }

            // Report any thrown errors / promise rejections so they show up in the logs
            window.addEventListener('error', (e) => {
              if (window.parent && e.error) {
                try {
                  window.parent.postMessage({ type: 'error', stack: e.error.stack }, '*');
                } catch (err) {
                  // Silently fail if posting message fails
                }
              }
            });
            window.addEventListener('unhandledrejection', (e) => {
              if (window.parent) {
                try {
                  window.parent.postMessage({ type: 'unhandledrejection', reason: e.reason }, '*');
                } catch (err) {
                  // Silently fail if posting message fails
                }
              }
            });

            // Report URL change event from iframe
            const originalPushState = history.pushState;
            const originalReplaceState = history.replaceState;

            const notifyParent = () => {
              if (window.parent) {
                try {
                  window.parent.postMessage({ type: 'iframe_url_changed', url: window.location.href }, '*');
                } catch (e) {
                  // Silently fail if posting message fails
                }
              }
            };

            history.pushState = function (...args) {
              originalPushState.apply(this, args);
              notifyParent();
            };

            history.replaceState = function (...args) {
              originalReplaceState.apply(this, args);
              notifyParent();
            };

            window.addEventListener('popstate', notifyParent);
            window.addEventListener('hashchange', notifyParent);
          `,
          },
        ];
      },

      transform(src, id) {
        if (id.includes('main.tsx')) {
          return `
            ${src}
            if (process.env.NODE_ENV === 'development') {
              // Report any hmr errors up to the parent context
              // Full event list: https://vite.dev/guide/api-hmr.html
              if (import.meta.hot) {
                import.meta.hot.on('vite:error', (data) => {
                  if (window.parent) {
                    try {
                      window.parent.postMessage({ type: 'vite:hmr:error', data }, '*');
                    } catch (e) {
                      // Silently fail if posting message fails
                    }
                  }
                });
                import.meta.hot.on('vite:beforeUpdate', (data) => {
                  if (window.parent) {
                    try {
                      window.parent.postMessage({ type: 'vite:hmr:beforeUpdate', data }, '*');
                    } catch (e) {
                      // Silently fail if posting message fails
                    }
                  }
                });
                import.meta.hot.on('vite:afterUpdate', (data) => {
                  if (window.parent) {
                    try {
                      window.parent.postMessage({ type: 'vite:hmr:afterUpdate', data }, '*');
                    } catch (e) {
                      // Silently fail if posting message fails
                    }
                  }
                });
              }
            }
          `;
        }
      },
    },
  ],
  server: {
    allowedHosts: true,
    hmr: {
      overlay: true,
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        warn(warning);
      }
    }
  },
});
