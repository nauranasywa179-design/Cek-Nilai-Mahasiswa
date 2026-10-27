
const form = document.getElementById("formNilai");
const inputNama = document.getElementById("nama");
const inputNilai = document.getElementById("nilai");

const hasil = document.getElementById("hasil");
const pesanError = document.getElementById("pesanError");
const daftarGrade = document.getElementById("daftarGrade");

// Data panduan grade
const panduan = [
    { grade: "A", rentang: "85 - 100", nama: "Sangat Baik" },
    { grade: "B", rentang: "75 - 84", nama: "Baik" },
    { grade: "C", rentang: "65 - 74", nama: "Cukup" },
    { grade: "D", rentang: "50 - 64", nama: "Kurang" },
    { grade: "E", rentang: "0 - 49", nama: "Sangat Kurang" }
];

// Menampilkan panduan menggunakan perulangan for
for (let i = 0; i < panduan.length; i++) {
    const item = document.createElement("li");

    const bagianKiri = document.createElement("div");
    bagianKiri.className = "grade-code";

    const huruf = document.createElement("span");
    huruf.className = "grade-letter";
    huruf.textContent = panduan[i].grade;

    const namaGrade = document.createElement("span");
    namaGrade.className = "grade-name";
    namaGrade.textContent = panduan[i].nama;

    const rentang = document.createElement("span");
    rentang.className = "grade-range";
    rentang.textContent = panduan[i].rentang;

    bagianKiri.append(huruf, namaGrade);
    item.append(bagianKiri, rentang);
    daftarGrade.appendChild(item);
}

// Fungsi menampilkan pesan kesalahan
function tampilkanError(pesan) {
    pesanError.textContent = pesan;
    pesanError.hidden = false;
    hasil.hidden = true;
}

// Proses ketika tombol ditekan
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = inputNama.value.trim();
    const nilaiInput = inputNilai.value;
    const nilai = Number(nilaiInput);

    // Validasi nama
    if (nama === "") {
        tampilkanError("Nama mahasiswa wajib diisi.");
        inputNama.focus();
        return;
    }

    if (nama.length > 80) {
        tampilkanError("Nama maksimal 80 karakter.");
        inputNama.focus();
        return;
    }

    // Validasi nilai kosong dan bukan angka
    if (nilaiInput.trim() === "" || !Number.isFinite(nilai)) {
        tampilkanError("Masukkan nilai dalam bentuk angka.");
        inputNilai.focus();
        return;
    }

    // Validasi rentang dan bilangan bulat
    if (nilai < 0 || nilai > 100 || !Number.isInteger(nilai)) {
        tampilkanError(
            "Nilai harus berupa bilangan bulat dari 0 sampai 100."
        );
        inputNilai.focus();
        return;
    }

    let grade;
    let status;
    let saran;

    // Percabangan dengan lima kategori nilai
    if (nilai >= 85) {
        grade = "A";
        status = "LULUS";
        saran = "Sangat baik! Pertahankan prestasi dan terus kembangkan kemampuanmu.";
    } else if (nilai >= 75) {
        grade = "B";
        status = "LULUS";
        saran = "Hasil belajarmu sudah baik. Terus berlatih agar lebih maksimal.";
    } else if (nilai >= 65) {
        grade = "C";
        status = "LULUS";
        saran = "Cukup baik. Perbanyak latihan dan ulangi materi yang belum dikuasai.";
    } else if (nilai >= 50) {
        grade = "D";
        status = "PERLU PERBAIKAN";
        saran = "Pelajari kembali materi dan tingkatkan latihan secara rutin.";
    } else {
        grade = "E";
        status = "PERLU PERBAIKAN";
        saran = "Jangan menyerah. Mulai dari materi dasar dan belajar secara bertahap.";
    }

    // Mengisi hasil evaluasi
    document.getElementById("hasilNama").textContent = nama;
    document.getElementById("hasilNilai").textContent = nilai;
    document.getElementById("hasilGrade").textContent = grade;
    document.getElementById("hasilSaran").textContent = saran;

    const badge = document.getElementById("statusBadge");
    badge.textContent = status;
    badge.classList.toggle("repair", grade === "D" || grade === "E");

    // Menampilkan hasil dan menghapus pesan error
    pesanError.hidden = true;
    hasil.hidden = false;
});
