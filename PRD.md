# PRD: Portfolio Website Neo-Brutalism

| | |
|---|---|
| Versi | 1.0 (Fase 1: prototipe frontend dengan data dummy) |
| Pemilik | San |
| Status | Prototipe selesai, siap dikembangkan ke Laravel + CMS |
| Berkas | `index.html`, `style.css`, `script.js` |

## 1. Ringkasan

Website portfolio personal bergaya **neo-brutalism bersih**: latar krem terang, border hitam tebal, bayangan keras tanpa blur, dan aksen warna primer yang hemat. Pemilik adalah fresh graduate dengan pengalaman kerja yang masih sedikit, sehingga portfolio menonjolkan **riwayat pelatihan (bootcamp, workshop, kursus)**, sertifikat, dan proyek.

## 2. Tujuan dan Metrik

| Tujuan | Ukuran keberhasilan |
|---|---|
| Menampilkan profil, skill, dan proyek dengan cepat | Semua section terbaca tanpa scroll horizontal di 360px sampai 1440px |
| Membuktikan kompetensi lewat pelatihan dan sertifikat | Setiap sertifikat bisa dipratinjau dalam 1 klik |
| Memudahkan rekruter menghubungi | CTA WhatsApp dan email terlihat di hero dan di section Kontak |
| Mudah dipindah ke CMS | Semua konten berasal dari array data terstruktur (lihat bagian 7) |

## 3. Target Pengguna

- Rekruter dan HR yang membuka dari ponsel maupun desktop.
- Pemberi proyek freelance dan UMKM.
- Dosen, asesor, dan komunitas.

## 4. Lingkup Fase 1

**Termasuk:** 11 section, galeri dan sertifikat dengan lightbox, filter pelatihan, menu mobile, form kontak dummy, responsif.
**Tidak termasuk:** backend, autentikasi, penyimpanan form, CMS, SEO dinamis, multi-bahasa.

## 5. Struktur Berkas

```
portfolio/
├── index.html   # kerangka section kosong + hero statis
├── style.css    # seluruh gaya, token warna di :root
├── script.js    # data dummy, render section, nav, lightbox, filter, form
└── PRD.md
```

- Satu-satunya dependensi eksternal adalah Google Fonts (Plus Jakarta Sans). Tanpa framework dan tanpa library JS.
- `index.html` memuat `style.css` di `<head>` dan `script.js` di akhir `<body>`.
- Gambar foto dan sertifikat dibuat sebagai SVG data-URI dari JS (placeholder). Ganti dengan file asli di fase berikutnya.

## 6. Sistem Desain (wajib sama persis)

### 6.1 Token warna (`:root` di `style.css`)

| Token | Hex | Dipakai untuk |
|---|---|---|
| `--bg` | `#FFFBF2` | Latar halaman (krem terang), latar chip dasar, latar bar |
| `--card` | `#FFFFFF` | Kartu, navbar, tombol sekunder, judul section, marquee, kotak kontak |
| `--fg` | `#111111` | Teks utama |
| `--ink` | `#111111` | Semua border dan bayangan keras |
| `--muted` | `#555555` | Teks pendukung, deskripsi, tagline |
| `--blue` | `#2F5BFF` | Tombol utama, subjudul peran, garis kiri judul section, blob foto, tombol filter aktif, meta tanggal |
| `--red` | `#E63232` | Kata "PRATAMA" di logo, sapaan "Halo", titik timeline, bintang hero, tombol tutup modal |
| `--yellow` | `#F2C84B` | Hover dan aktif menu, badge jenis pelatihan, garis atas kotak kontak, bintang hero, tombol panah modal |
| `--green` | `#22C55E` | Titik badge status, isi bar bahasa, garis atas statistik ke-4 |
| `--pink` | `#FF9AD5` | Garis atas statistik ke-1 |

Warna tambahan:

| Hex | Dipakai untuk |
|---|---|
| `#FFF1BF`, `#FFDDEF`, `#DCE5FF` | Chip skill, bergantian per urutan (`3n+1`, `3n+2`, `3n`) |
| `#FFFDF5` | Latar gambar sertifikat placeholder |
| `rgba(0,0,0,.72)` | Overlay modal |
| `#FFFFFF` di atas `--blue` | Teks tombol utama |

Aturan komposisi: **krem dan putih mendominasi (sekitar 85%)**, hitam untuk struktur, warna jenuh hanya sebagai aksen kecil. Tidak ada mode gelap (`color-scheme: light`).

Placeholder gambar memakai urutan warna: `#2F5BFF`, `#E63232`, `#F2C84B`, `#22C55E`, `#FF9AD5`.

### 6.2 Tipografi

- Font: **Plus Jakarta Sans** (400, 600, 800, italic 300), fallback `system-ui, -apple-system, Segoe UI, sans-serif`.
- `h1` nama: `clamp(2.6rem, 8vw, 5rem)`, berat 800, letter-spacing `-.03em`, line-height 1.
- Judul section `.h`: `clamp(1.8rem, 4.5vw, 2.8rem)`, berat 800.
- Peran: 1.2rem, berat 800, warna biru.
- Tagline: italic berat 300, warna `--muted`, lebar maksimum 460px.
- Menu navbar: .78rem, berat 800. Body: line-height 1.6.

### 6.3 Bentuk, border, dan bayangan

| Elemen | Border | Radius | Bayangan |
|---|---|---|---|
| Kartu `.nb` | 3px `--ink` | 20px | `5px 5px 0 --ink` |
| Tombol `.btn` | 3px `--ink` | 999px | `4px 4px 0 --ink` |
| Judul section | 3px, sisi kiri 12px biru | 14px | `5px 5px 0 --ink`, rotasi -1.5deg |
| Chip | 3px | 999px | `3px 3px 0 --ink` |
| Frame foto hero | 3px, padding 14px | 26px | `7px 7px 0 --ink` |
| Bar bahasa | 3px, tinggi 16px | 999px | tanpa |
| Input kontak | 3px `#111` | 14px | tanpa |

Semua bayangan **solid tanpa blur**.

### 6.4 Interaksi tombol

- Hover: geser `translate(2px, 2px)`, bayangan jadi `2px 2px 0`.
- Active: geser `translate(4px, 4px)`, bayangan hilang.
- Transisi 0.15s. Fokus keyboard: outline 3px biru, offset 3px.

## 7. Layout dan Section

Container: lebar maksimum **1120px**, padding horizontal 20px, rata tengah. Jarak antar section: padding atas 72px.

### 7.1 Urutan halaman

1. **Navbar** (sticky)
2. **Hero**
3. **Marquee**
4. **Tentang** (`#tentang`)
5. **Galeri** (`#galeri`)
6. **Pengalaman** (`#pengalaman`)
7. **Pendidikan** (`#pendidikan`)
8. **Pelatihan** (`#pelatihan`)
9. **Keahlian** (`#keahlian`)
10. **Bahasa** (`#bahasa`)
11. **Sertifikat** (`#sertifikat`)
12. **Proyek** (`#proyek`)
13. **Kontak** (`#kontak`)
14. **Footer**

### 7.2 Detail per section

| Section | Layout desktop | Isi dan komponen |
|---|---|---|
| Navbar | Pill melayang, sticky `top: 10px`, logo kiri, 9 menu di tengah, tombol MENU hanya di mobile | Logo: lingkaran biru berinisial "SP" + wordmark (SANDI hitam, PRATAMA merah). Menu aktif ditandai kuning sesuai posisi scroll |
| Hero | 2 kolom `1.1fr / .9fr`, gap 40px, rata tengah vertikal | Kiri: badge status, sapaan merah, nama, peran biru, tagline, CTA "Hubungi WhatsApp" (biru) dan "Lihat Galeri" (putih), email. Kanan: foto berframe putih, blob biru di belakang, label lokasi, 2 bintang berputar (merah kanan atas, kuning kiri bawah). Foto bisa diklik |
| Marquee | Pita penuh lebar, putih, border atas-bawah 3px, miring -1deg | Teks berjalan: PHP, Laravel, MySQL, PostgreSQL, Tailwind, Git, REST API |
| Tentang | 2 kolom `1.4fr / 1fr`, gap 26px | Kartu bio + 2 CTA; grid statistik 2×2 dengan garis atas 10px: pink, kuning, biru, hijau |
| Galeri | Grid 3 kolom, gap 22px | 6 foto, rasio 4:3, kemiringan selang-seling ±1deg, hover lurus dan naik 4px. Klik membuka lightbox |
| Pengalaman | 1 kolom, timeline dengan garis vertikal 4px | Kartu per item: judul, meta biru, daftar poin. Titik merah 18px di garis |
| Pendidikan | Grid 2 kolom | Kartu: jenjang, institusi dan periode, deskripsi |
| Pelatihan | Filter di atas, grid 2 kolom | Tombol filter (Semua, Bootcamp, Pelatihan, Workshop, Kursus Online; aktif = biru). Kartu: badge jenis (kuning), judul, penyelenggara dan periode (biru), deskripsi, chip skill |
| Keahlian | Grid 3 kolom | Kartu per kategori (Backend, Database, Frontend) berisi chip |
| Bahasa | Grid 3 kolom | Nama, level, bar progres hijau |
| Sertifikat | Grid 3 kolom | Kartu: gambar sertifikat rasio 10:7, judul, penerbit dan tahun, tombol biru "Lihat sertifikat" membuka pratinjau |
| Proyek | Grid 3 kolom | Kartu: tangkapan layar 16:9, judul, deskripsi, chip teknologi, tombol "Demo" (biru) dan "Kode" |
| Kontak | Kartu putih, garis atas 12px kuning, 2 kolom, gap 30px | Kiri: judul ajakan, jam balas, tombol WhatsApp, Email, GitHub, LinkedIn. Kanan: form Nama, Email, Pesan, tombol "Kirim pesan", pesan status |
| Footer | Rata tengah, teks `--muted` | Hak cipta |

### 7.3 Breakpoint

| Lebar | Perubahan |
|---|---|
| ≤ 1100px | Menu horizontal disembunyikan, tombol **MENU** muncul dengan panel dropdown 2 kolom |
| ≤ 860px | Hero 1 kolom (foto di atas, lebar `min(86%, 340px)`); grid 3 kolom menjadi 2 |
| ≤ 760px | Tentang dan Kontak menjadi 1 kolom |
| ≤ 560px | Semua grid menjadi 1 kolom |

Aturan tambahan: tidak boleh ada scroll horizontal; safe-area iOS dihormati lewat `env(safe-area-inset-*)`.

## 8. Perilaku dan Interaksi

| Fitur | Perilaku |
|---|---|
| Navigasi | Klik menu menggulir halus ke section (menghormati reduced motion). Menu mobile menutup setelah klik |
| Menu aktif | Item navbar yang section-nya berada di atas 150px dari viewport diberi latar kuning |
| Lightbox foto | Klik foto hero atau galeri membuka modal; tombol ‹ ›, panah keyboard, Esc, klik overlay, dan tombol ✕ |
| Pratinjau sertifikat | Klik "Lihat sertifikat" membuka modal yang sama dengan daftar sertifikat; bisa digeser antar sertifikat |
| Filter pelatihan | Klik tombol menyaring kartu berdasarkan jenis; "Semua" menampilkan seluruhnya |
| Form kontak | Validasi bawaan browser; saat kirim menampilkan pesan "Pesan terkirim (prototipe)" lalu mengosongkan form. Belum ada pengiriman ke server |
| Animasi | Bintang hero berputar 12 detik, marquee 22 detik. Keduanya mati jika pengguna memilih *reduced motion* |

## 9. Model Data (array di `script.js`)

| Array | Bentuk item |
|---|---|
| `NAV` | `[id, label]` |
| `GAL` | `{ t: judul, src }` |
| `EXP` | `[judul, "instansi · periode", [poin...]]` |
| `EDU` | `[jenjang, "institusi · periode", deskripsi]` |
| `TR` | `[jenis, judul, penyelenggara, "periode · durasi", deskripsi, [skill...]]` |
| `SK` | `[kategori, [skill...]]` |
| `LG` | `[bahasa, level, persen]` |
| `CT` | `{ t: judul, o: penerbit, y: tahun, src }` |
| `PR` | `[judul, deskripsi, [teknologi...]]` |

Untuk mengganti konten, cukup ubah array ini. Struktur HTML tidak perlu disentuh.

## 10. Aksesibilitas

- Elemen interaktif memakai `<button>` atau `<a>`; foto klik punya `aria-label`.
- Modal memakai `role="dialog"`, `aria-modal`, fokus pindah ke tombol tutup saat dibuka.
- Bar bahasa punya `role="img"` dan `aria-label`; status form memakai `role="status"`.
- Kontras: teks hitam di atas krem/putih/pastel; teks putih hanya di atas biru `#2F5BFF`.
- Navigasi penuh dengan keyboard, fokus terlihat jelas.

## 11. Fase Berikutnya (Laravel + CMS)

Konten saat ini dummy dan hardcoded. Rencana pindah ke backend:

| Tabel | Kolom utama |
|---|---|
| `profiles` | nama, peran, tagline, email, whatsapp, lokasi, foto |
| `gallery_items` | judul, gambar, urutan |
| `experiences` | judul, instansi, mulai, selesai, poin (JSON) |
| `educations` | jenjang, institusi, mulai, selesai, deskripsi |
| `trainings` | jenis, judul, penyelenggara, mulai, durasi, deskripsi, skill (JSON), sertifikat_id (nullable) |
| `skills` | kategori, nama, urutan |
| `languages` | nama, level, persen |
| `certificates` | judul, penerbit, tahun, berkas gambar/PDF |
| `projects` | judul, deskripsi, teknologi (JSON), url_demo, url_kode, gambar |
| `messages` | nama, email, pesan, dibaca, dibuat_pada |

Rencana langkah: pindahkan markup ke Blade, ganti array JS dengan data dari controller, tambah panel admin untuk CRUD, simpan form kontak ke tabel `messages`, dan tambah validasi serta rate limit.

## 12. Kriteria Penerimaan

1. Halaman dijalankan dengan membuka `index.html` (ketiga berkas dalam satu folder) dan tampil identik dengan prototipe.
2. Semua warna sesuai tabel bagian 6.1; tidak ada warna jenuh di luar peran yang tercantum.
3. Border, radius, dan bayangan sesuai bagian 6.3 di semua kartu dan tombol.
4. Layout berubah tepat pada breakpoint bagian 7.3.
5. Galeri, sertifikat, filter pelatihan, menu mobile, dan form berfungsi sesuai bagian 8.
6. Tidak ada scroll horizontal pada lebar 360px.
7. Mengubah satu item di array data langsung tampil di section terkait.
