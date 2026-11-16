# TodoApp-Lutfi

Aplikasi **Todo App** merupakan aplikasi pengelolaan daftar kegiatan atau tugas harian yang dibangun menggunakan React Native dengan Expo dan Firebase Firestore sebagai database. Aplikasi ini dibuat untuk membantu pengguna mencatat, melihat, mengubah, dan menghapus daftar kegiatan secara praktis.

## 1. Deskripsi Proyek

TodoApp-Nazib adalah aplikasi sederhana untuk mengelola aktivitas sehari-hari. Aplikasi ini menerapkan konsep CRUD (Create, Read, Update, Delete) dengan memanfaatkan Firebase Firestore sebagai penyimpanan data secara online.

Melalui aplikasi ini, pengguna dapat mengelola daftar kegiatan tanpa harus mencatatnya secara manual.

## 2. Fitur Utama

Berikut fitur-fitur utama yang tersedia pada aplikasi TodoApp-Nazib:

- **Create Todo:** Menambahkan kegiatan atau tugas baru ke dalam daftar.
- **Read Todo:** Menampilkan seluruh daftar kegiatan yang tersimpan di Firebase Firestore.
- **Update Todo:** Mengubah atau memperbarui nama kegiatan yang sudah dibuat.
- **Delete Todo:** Menghapus kegiatan yang sudah tidak diperlukan.
- **Real-Time Database:** Data aplikasi terhubung dengan Firebase Firestore sehingga perubahan data dapat diperbarui secara otomatis.
- **Validasi Input:** Mencegah pengguna menambahkan Todo dengan teks kosong.

## 3. Teknologi yang Digunakan

Teknologi dan tools yang digunakan dalam pengembangan aplikasi ini adalah:

| Teknologi | Kegunaan |
|---|---|
| React Native | Framework pengembangan aplikasi mobile |
| Expo Snack | Platform pengembangan aplikasi melalui browser |
| JavaScript | Bahasa pemrograman |
| Firebase | Layanan backend |
| Cloud Firestore | Database penyimpanan data Todo |
| React Navigation | Navigasi antarhalaman |
| React Native Paper | Komponen antarmuka |
| Expo Vector Icons | Ikon pada aplikasi |

## 4. Struktur Folder Proyek

Struktur folder aplikasi TodoApp-Nazib:

```text
TodoApp-Nazib/
│
├── App.js
├── config.js
├── package.json
│
├── Screens/
│   ├── Home.js
│   └── Detail.js
│
├── assets/
│
└── components/
```

Keterangan:
- `App.js`: File utama untuk mengatur navigasi aplikasi.
- `config.js`: Konfigurasi koneksi Firebase.
- `package.json`: Daftar dependency yang digunakan.
- `Screens/Home.js`: Halaman utama untuk menampilkan dan mengelola daftar Todo.
- `Screens/Detail.js`: Halaman untuk mengubah data Todo.
- `assets/`: Menyimpan aset aplikasi.
- `components/`: Menyimpan komponen pendukung.

## 5. Cara Instalasi dan Menjalankan Aplikasi

Aplikasi dikembangkan menggunakan Expo Snack sehingga proses pengembangan dapat dilakukan langsung melalui browser.

### A. Persiapan

Pastikan perangkat memiliki:
- Browser seperti Google Chrome.
- Koneksi internet.
- Akun Expo Snack.
- Akun Firebase.

### B. Menjalankan melalui Expo Snack

1. Buka website https://snack.expo.dev/
2. Login menggunakan akun Expo.
3. Buka atau impor project TodoApp-Nazib.
4. Pastikan seluruh file proyek sudah tersedia.
5. Pastikan dependency pada `package.json` sudah terpasang.
6. Periksa konfigurasi Firebase pada file `config.js`.
7. Tunggu proses bundling selesai.
8. Jalankan aplikasi melalui fitur Preview pada Expo Snack.

### C. Konfigurasi Firebase

Untuk menghubungkan aplikasi dengan database:

1. Buka https://console.firebase.google.com/
2. Pilih project Firebase yang digunakan.
3. Masuk ke menu Firestore Database.
4. Buat atau pilih collection dengan nama `todos`.
5. Salin konfigurasi Firebase Web App.
6. Masukkan konfigurasi tersebut ke dalam file `config.js`.
7. Pastikan aturan keamanan Firestore telah diatur sesuai kebutuhan aplikasi.

## 6. Database

Aplikasi menggunakan Cloud Firestore dengan collection bernama `todos`.

Struktur data yang digunakan:

| Field | Tipe Data | Keterangan |
|---|---|---|
| heading | String | Nama kegiatan atau tugas |
| createdAt | Timestamp | Waktu pembuatan Todo |

Contoh data:

```json
{
  "heading": "Belajar React Native",
  "createdAt": "Firestore Timestamp"
}
```

## 7. Tangkapan Layar / Demo Aplikasi

<img width="332" height="510" alt="WhatsApp Image 2026-11-15 at 15 00 23" src="https://github.com/user-attachments/assets/ff6ac275-2a87-4a2d-8def-4c29a8ecce88" />


### A. Halaman Home
<img width="331" height="509" alt="image" src="https://github.com/user-attachments/assets/f17c77d8-f4cf-4abd-b1c8-fc3ec84ed248" />
<img width="334" height="507" alt="image" src="https://github.com/user-attachments/assets/ade33c21-8290-4719-be02-fb6bc6a62283" />



### B. Halaman Detail
<img width="332" height="513" alt="image" src="https://github.com/user-attachments/assets/e1c8c696-d59d-4323-8f9f-5f50819f7968" />
<img width="330" height="508" alt="image" src="https://github.com/user-attachments/assets/ca540fe0-0e04-49cc-a144-297c0bf3ab08" />
<img width="443" height="145" alt="image" src="https://github.com/user-attachments/assets/c9b524e6-4bb1-4693-8ce3-bcd7b0fa0a64" />
<img width="332" height="509" alt="WhatsApp Image 2026-11-15 at 15 09 19" src="https://github.com/user-attachments/assets/1cc5b8d7-8538-494b-afc6-c7262501b3d3" />




### C. Firebase Firestore
<img width="987" height="284" alt="image" src="https://github.com/user-attachments/assets/6ba63e62-a49d-455f-b6f0-335fea919e79" />



## 8. Pengembang

**Nama:** lutfi alfiqri

**NPM:** 411550502400002

**Nama Proyek:** TodoApp-Nazib

**Mata Kuliah:** Pemrograman Mobile

---


