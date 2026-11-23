const form = document.getElementById("formRegistrasi");
const inputNama = document.getElementById("inputNama");
const errNama = document.getElementById("errNama");
const pesanSukses = document.getElementById("pesanSukses");
form.addEventListener("submit", function(event)
{ //mencegah reload halaman bawaan browser
    event.preventDefault();
    //reset pesan error
    errNama.textContent = "";
    pesanSukses.textContent = "";
    //validasi input 
    if (inputNama.value.trim() === "")
    {
        errNama.textContent = "Nama tidak boleh kosong!";
        inputNama.style.borderColor = "red";
    }
    else if (inputNama.value.length < 3)
    {
        errNama.textContent = "Nama minimal 3 karakter!";
    }
    else {
        inputNama.style.borderColor = "green";
        pesanSukses.textContent = `Selamat ${inputNama.value}, pendaftaran berhasil!`;
        inputNama.value = ""; //reset input
    }
});

