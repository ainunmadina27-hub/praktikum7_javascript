// Menyeleksi elemen input, tombol, dan kontainer list 
const inputTugas = document.getElementById("inputTugas"); 
const btnTambah = document.getElementById("btnTambah"); 
const daftarTugas = document.getElementById("daftarTugas"); 
// Fungsi Tambah Tugas 
function tambahTugas() 
{ 
    const teksTugas = inputTugas.value.trim(); 
    if (teksTugas === "") { alert("Tugas tidak boleh kosong!"); 
        return; 
} // 1. Buat elemen baru 
const liBaru = document.createElement("li"); 
liBaru.textContent = teksTugas; 
// 2. Buat tombol hapus di dalam
const btnHapus = document.createElement("button"); 
btnHapus.textContent = "Hapus"; 
btnHapus.style.marginLeft = "10px"; 
// 3. Tambahkan event listener hapus 
btnHapus.addEventListener("click", function() { liBaru.remove(); // Menghapus item dari antarmuka web 
}); // 4. Sisipkan tombol ke daftar 
liBaru.appendChild(btnHapus); 
daftarTugas.appendChild(liBaru); // Reset input setelah berhasil menambahkan 
inputTugas.value = ""; } // Jalankan fungsi saat tombol diklik 
btnTambah.addEventListener("click", tambahTugas);