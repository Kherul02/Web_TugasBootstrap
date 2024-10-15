document.getElementById('contactButton').addEventListener('click', function() {
    // Menampilkan prompt untuk meminta pengguna memasukkan pesan
    let message = prompt("Masukkan pesan Anda:", "Tanya lebih lanjut tentang saya...");
    
    // Mengecek apakah pengguna memasukkan pesan atau tidak
    if (message) {
        alert("Pesan Anda: " + message); // Menampilkan pesan yang dimasukkan
    } else {
        alert("Anda tidak memasukkan pesan."); // Pesan jika tidak ada input
    }
});
