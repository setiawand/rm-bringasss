## Tujuan
- Banner menampilkan video dari `public/video/bringasss-video.mp4` (tanpa slide).
- Section Favorite memakai gambar dari `public/images/*` pada tiap kartu.

## Perubahan File
- `components/BannerCarousel.jsx`
  - Hapus state dan dot navigation (components/BannerCarousel.jsx:12, 19–28)
  - Render tag `video` dengan `src="/video/bringasss-video.mp4"`, `playsInline`, `autoPlay`, `muted`, `loop` di dalam `.banner-image-wrap` (components/BannerCarousel.jsx:15–19)
  - Pertahankan class wrapper yang ada agar gaya tetap konsisten (`.banner-image-wrap`)
- `app/globals.css`
  - Pastikan media banner tetap `object-fit: cover` (gunakan class yang sama untuk video) (app/globals.css:27–33)
- `components/FavoriteGrid.jsx`
  - Ubah `items` agar berisi `{ src, title }` untuk file: `box-ayam.png`, `box-ayam-kampung.png`, `box-bebek.png`, `box-ikan.png` (components/FavoriteGrid.jsx:2–7)
  - Render gambar dengan `next/image` di dalam `.card-image`; gunakan `fill` dan `sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"`
- `app/globals.css`
  - Set `.card-image { position: relative; height: 120px; }` dan hilangkan background gradient (app/globals.css:39)

## Detail Teknis
- Path video: `/video/bringasss-video.mp4`
- Path gambar: `/images/box-ayam.png`, `/images/box-ayam-kampung.png`, `/images/box-bebek.png`, `/images/box-ikan.png`
- `next/image` dengan `fill` membutuhkan container `position: relative` dan `height` tetap

## Output
- Banner menampilkan video autoplay tanpa kontrol, loop, muted.
- Kartu Favorite menampilkan foto sesuai asset di `public/images`.

## Konfirmasi
- Jika disetujui, saya akan langsung menerapkan perubahan pada ketiga file tersebut dan menyesuaikan CSS seperlunya.