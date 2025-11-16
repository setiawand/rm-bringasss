# RM Bringasss

Website prototipe untuk Rumah Makan Bringasss, dibangun dengan Next.js 14 (App Router) dan React 18.

## Tech Stack
- Next.js 14 (App Router)
- React 18

## Fitur
- Banner video autoplay dari `public/video/bringasss-video.mp4`
- Section Favorite menampilkan gambar dari `public/images/*` menggunakan `next/image`

## Struktur Proyek
- `app/layout.jsx` — layout utama, header/nav/footer, metadata
- `app/page.jsx` — halaman beranda, menampilkan banner dan section Favorite
- `app/about/page.jsx` — halaman info singkat
- `app/menu/page.jsx` — halaman menu (contoh)
- `app/review/page.jsx` — halaman ulasan (contoh)
- `components/BannerCarousel.jsx` — komponen banner (video autoplay, tanpa slide)
- `components/FavoriteGrid.jsx` — grid favorit dengan gambar
- `app/globals.css` — styling global dan responsif
- `next.config.js` — konfigurasi Next.js
- `public/images/*` — aset gambar
- `public/video/bringasss-video.mp4` — aset video banner
- `package.json` — dependency dan npm scripts

## Prasyarat
- Node.js 18+ dan npm

## Menjalankan Secara Lokal
```bash
npm install
npm run dev
```
Aplikasi akan tersedia di `http://localhost:3000` (atau port alternatif jika 3000 sudah dipakai).

## Build dan Start Produksi
```bash
npm run build
npm start
```

## Catatan Implementasi
- App Router: seluruh halaman berada di dalam folder `app/`
- Tidak ada autentikasi atau middleware khusus
- Banner memakai `<video>` dengan atribut `playsInline`, `autoPlay`, `muted`, `loop`
- Gambar favorit menggunakan `next/image` dengan layout `fill` dan container `position: relative`