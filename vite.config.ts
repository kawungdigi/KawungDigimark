import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "digital-marketing-branding",

      // ref: https://vite.dev/guide/api-plugin.html#transformindexhtml
      transformIndexHtml(html) {
        if (process.env.NODE_ENV !== "development" && process.env.SHOW_WATERMARK !== "false") {
          return [
            {
              tag: "style",
              attrs: { type: "text/css" },
              injectTo: "head",
              children: `
                .digital-watermark {
                  position: fixed;
                  bottom: 16px;
                  right: 16px;
                  background: linear-gradient(to right, #4338ca, #6366f1);
                  border-radius: 8px;
                  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
                  display: flex;
                  align-items: center;
                  padding: 8px 12px;
                  z-index: 9999;
                  font-family: "Instrument Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                  font-size: 14px;
                  font-weight: 600;
                  color: white;
                  gap: 8px;
                  border: none;
                  cursor: pointer;
                  transition: all 0.2s ease-in-out;
                }
                .digital-watermark:hover {
                  transform: translateY(-2px);
                  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
                }
                .digital-watermark:active {
                  transform: translateY(0);
                  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
                }
                .digital-watermark img {
                  width: 16px;
                  height: 16px;
                }
              `,
            },
            {
              tag: "script",
              attrs: { type: "module" },
              injectTo: "body",
              children: `
                const watermark = document.createElement('a');
                watermark.href = 'https://kawungdigimark.com';
                watermark.target = '_blank';
                watermark.className = 'digital-watermark';
                watermark.innerHTML = \`
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  Powered by Kawung Digital
                \`;
                document.body.appendChild(watermark);
              `,
            },
          ];
        }

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
                window.parent.postMessage({ type: 'console', method, args: args.map(a => \`\${a}\`) }, '*');
                return originalFn(...args);
              };
            }

            // Report any thrown errors / promise rejections so they show up in the logs
            window.addEventListener('error', (e) => {
              if (window.parent) {
                window.parent.postMessage({ type: 'error', stack: e.error.stack }, '*');
              }
            });
            window.addEventListener('unhandledrejection', (e) => {
              if (window.parent) {
                window.parent.postMessage({ type: 'unhandledrejection', reason: e.reason }, '*');
              }
            });

            // Report URL change event from iframe
            const originalPushState = history.pushState;
            const originalReplaceState = history.replaceState;

            const notifyParent = () => {
              window.parent.postMessage({ type: 'iframe_url_changed', url: window.location.href }, '*');
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

      transform(src: string, id: string) {
        if (id === "/app/src/main.tsx") {
          return `
            ${src}
            if (process.env.NODE_ENV === 'development') {
              // Report any hmr errors up to the parent context
              // Full event list: https://vite.dev/guide/api-hmr.html
              if (import.meta.hot) {
                import.meta.hot.on('vite:error', (data) => {
                  if (window.parent) {
                    window.parent.postMessage({ type: 'vite:hmr:error', data }, '*');
                  }
                });
                import.meta.hot.on('vite:beforeUpdate', (data) => {
                  if (window.parent) {
                    window.parent.postMessage({ type: 'vite:hmr:beforeUpdate', data }, '*');
                  }
                });
                import.meta.hot.on('vite:afterUpdate', (data) => {
                  if (window.parent) {
                    window.parent.postMessage({ type: 'vite:hmr:afterUpdate', data }, '*');
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
  },
});
