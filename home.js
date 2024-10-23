// Dapatkan semua tautan navigasi
const navLinks = document.querySelectorAll('.nav-link');

// Tambahkan event listener ke setiap tautan navigasi
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Hapus kelas 'active' dari semua tautan
        navLinks.forEach(link => link.classList.remove('active'));

        // Tambahkan kelas 'active' ke tautan yang diklik
        this.classList.add('active');
    });
});