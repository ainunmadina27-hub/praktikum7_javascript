// 1. Menyeleksi elemen berdasarkan ID dan Class 
const judul = document.getElementById("judulWeb");
const deskripsi = document.querySelector(".deskripsi");
const tombol = document.getElementById("btnUbah");

// 2. Manipulasi konten dan style via event click 
tombol.addEventListener("click", function() { judul.textContent = "Konten Berhasil Diperbarui!";
    deskripsi.classList.add("highlight");
    deskripsi.innerHTML = "Teks ini telah diubah via <strong>JavaScript DOM</strong>.";
})