# Portofolio Arbet Thetus Sinaga

Website portofolio profesional dan minimalis yang dibangun berdasarkan desain Figma, dioptimalkan untuk kecepatan, tampilan responsif di semua perangkat (Desktop, Tablet, & Mobile), serta kemudahan deployment.

---

## 🚀 Cara Membuka / Menjalankan Website

### 1. Buka Langsung di Komputer (Offline/Lokal)
Cukup **klik dua kali (double-click)** pada file `index.html` di dalam folder ini, atau klik kanan lalu pilih **Open with > Google Chrome / Microsoft Edge / Firefox**.

### 2. Menjalankan dengan Local Server (Opsional)
Jika Anda menggunakan Visual Studio Code:
- Klik kanan `index.html` -> **Open with Live Server**.
- Atau jalankan perintah terminal di folder ini:
  ```bash
  python -m http.server 3000
  ```
  Lalu buka `http://localhost:3000` di browser.

---

## 🎨 Panduan Kustomisasi Cepat

### 1. Mengganti Foto Profil
1. Siapkan foto formal/semi-formal Anda (disarankan orientasi potret / rasio 4:5).
2. Beri nama file foto tersebut **`avatar.jpg`**.
3. Simpan di dalam folder `portfolio/` ini (sejajar dengan `index.html`).
4. Refresh browser, dan foto Anda akan otomatis tampil!

### 2. Mengubah CV / Resume (PDF)
1. Siapkan file CV terbaru Anda dalam format PDF.
2. Beri nama file tersebut **`CV_Arbet_Thetus.pdf`**.
3. Timpa (*replace*) file `CV_Arbet_Thetus.pdf` yang ada di dalam folder `portfolio/`.
4. Tombol "Download CV" di website akan otomatis mengunduh CV terbaru Anda.

### 3. Mengubah Kontak & Sosial Media
File `index.html` sudah dikonfigurasi dengan data asli dari CV Anda:
- **Email**: `arbetthetus18@gmail.com`
- **WhatsApp**: `0895428233577` (terhubung ke link WhatsApp langsung)
- **LinkedIn & GitHub**: Anda bisa menyesuaikan username akun Anda jika diperlukan (misal: `linkedin.com/in/arbetthetus`).

### 4. Berkas Bukti Sertifikat (`sertif/`)
Folder `portfolio/sertif/` memuat 9 file PDF sertifikat asli Anda. Setiap kartu sertifikasi di website sudah otomatis terhubung ke file PDF masing-masing dan bisa langsung dibuka/diunduh oleh pengunjung dengan sekali klik.

---

## 🌐 Cara Deploy Gratis ke Internet

### Opsi A: Deploy ke GitHub Pages (Paling Direkomendasikan)
1. Buat repository baru di akun GitHub Anda (misal: `portfolio` atau `arbetthetus.github.io`).
2. Upload seluruh isi folder `portfolio/` ini (`index.html`, `style.css`, `script.js`, dan foto Anda).
3. Buka tab **Settings** di repository GitHub Anda -> pilih menu **Pages** di sebelah kiri.
4. Pada bagian *Build and deployment*, pilih Branch `main` dan folder `/ (root)`. Klik **Save**.
5. Tunggu 1-2 menit, website portofolio Anda sudah aktif di internet (misal: `https://username.github.io/portfolio`)!

### Opsi B: Deploy ke Vercel / Netlify
1. Buka [vercel.com](https://vercel.com) atau [netlify.com](https://netlify.com).
2. Drag & drop folder `portfolio/` ini ke dashboard deploy.
3. Website portofolio langsung online dengan custom subdomain gratis.
