# Folder Thumbnail Video Portofolio

Folder ini digunakan untuk menyimpan gambar thumbnail yang akan ditampilkan sebelum video diputar pada halaman portofolio.

## Panduan Ukuran Thumbnail

Untuk hasil terbaik, gunakan gambar dengan spesifikasi berikut:
- Rasio aspek: 16:9 (format video standar)
- Resolusi yang disarankan: 1280 x 720 pixel (HD) atau 1920 x 1080 pixel (Full HD)
- Format file: JPG atau PNG
- Ukuran file: Disarankan di bawah 300KB untuk performa loading yang baik

## Penamaan File

Gunakan konvensi penamaan yang konsisten untuk memudahkan pengelolaan:
- Gunakan huruf kecil
- Gunakan tanda hubung (-) untuk memisahkan kata
- Sertakan tanggal atau kategori jika diperlukan

Contoh: `kampanye-umkm-2023.jpg` atau `social-media-batik-nusantara.png`

## Template Thumbnail

Anda dapat membuat template thumbnail dengan menempatkan:
1. Logo klien atau proyek
2. Judul video yang menarik
3. Overlay atau tombol play untuk mengindikasikan ini adalah video
4. Tanggal atau informasi kategori (opsional)

## Contoh Penggunaan dalam Kode

```javascript
const videoPortfolioItems = [
  {
    id: 1,
    title: 'Kampanye Digital UMKM',
    // ... properti lain
    thumbnailImage: '/assets/images/thumbnails/kampanye-umkm-2023.jpg',
    // ... properti lain
  }
];
``` 