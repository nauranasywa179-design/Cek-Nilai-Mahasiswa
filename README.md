# Cek Nilai Mahasiswa

## Deskripsi Program

Program Cek Nilai Mahasiswa merupakan program web sederhana yang dibuat untuk memenuhi tugas mata kuliah Pemrograman Web. Program ini digunakan untuk menentukan grade dan status kelulusan mahasiswa berdasarkan nilai yang dimasukkan.

Program ini dibuat menggunakan HTML, CSS, dan JavaScript. Tampilannya menggunakan tema Dark Engineer dengan warna gelap dan aksen neon agar terlihat lebih menarik.

## Fitur Program

- Memasukkan nama dan nilai mahasiswa.
- Menentukan grade berdasarkan nilai.
- Menampilkan status kelulusan.
- Memberikan saran belajar berdasarkan hasil nilai.
- Memeriksa apakah input yang dimasukkan sudah benar.
- Menampilkan panduan grade secara otomatis.

## Teknologi yang Digunakan

- **HTML:** untuk membuat struktur halaman dan form input.
- **CSS:** untuk mengatur tampilan, warna, dan efek animasi.
- **JavaScript:** untuk memproses nilai, menentukan grade, dan menampilkan hasil.

## Penerapan Percabangan dan Perulangan

Pada program ini, percabangan `if`, `else if`, dan `else` digunakan untuk menentukan grade mahasiswa berdasarkan nilai yang dimasukkan.

Ketentuan grade yang digunakan adalah:

| Nilai | Grade | Status |
|---|---|---|
| 85–100 | A | Lulus |
| 75–84 | B | Lulus |
| 65–74 | C | Lulus |
| 50–64 | D | Perlu perbaikan |
| 0–49 | E | Perlu perbaikan |

Selain percabangan, program ini menggunakan perulangan `for` untuk menampilkan daftar grade dari data yang disimpan dalam array.

Program juga memiliki validasi agar nama tidak kosong dan nilai yang dimasukkan berupa bilangan bulat dari 0 sampai 100.

## Cara Menjalankan Program

1. Download atau clone repository ini.
2. Buka folder program menggunakan Visual Studio Code.
3. Pastikan file `index.html`, `style.css`, dan `script.js` berada dalam folder yang sama.
4. Buka file `index.html` melalui browser.
5. Masukkan nama dan nilai mahasiswa, kemudian klik tombol **Execute Evaluation**.

## Pengujian Program

Program dapat diuji menggunakan beberapa nilai berikut:

- Nilai 95 menghasilkan grade A.
- Nilai 80 menghasilkan grade B.
- Nilai 70 menghasilkan grade C.
- Nilai 60 menghasilkan grade D.
- Nilai 30 menghasilkan grade E.
- Nilai di luar rentang 0–100 ditolak oleh sistem.
- Nama atau nilai yang kosong akan menampilkan pesan kesalahan.

## Kesimpulan

Dari pembuatan program ini, saya mempelajari cara menggunakan percabangan dan perulangan dalam JavaScript. Saya juga belajar menghubungkan HTML, CSS, dan JavaScript agar input yang dimasukkan dapat diproses dan hasilnya ditampilkan pada halaman web.
