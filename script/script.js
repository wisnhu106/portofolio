// 1. Alert sederhana untuk form kontak
const contactForm = document.getElementById('contact-form');
const modalSuccess = document.getElementById('modal-success');
const btnCloseModal = document.getElementById('btn-close-modal');

// Fungsi Menampilkan Modal
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Tampilkan modal dengan menambahkan class 'show'
    modalSuccess.classList.add('show');
    
    // Reset form input
    contactForm.reset();
});

// Fungsi Menutup Modal
btnCloseModal.addEventListener('click', () => {
    modalSuccess.classList.remove('show');
});

// Menutup modal jika user klik di area luar kotak putih
window.addEventListener('click', (e) => {
    if (e.target === modalSuccess) {
        modalSuccess.classList.remove('show');
    }
});

// 2. Efek Sticky Navbar saat scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 10%';
        nav.style.background = '#ffffffee';
    } else {
        nav.style.padding = '20px 10%';
        nav.style.background = '#ffffff';
    }
});

// 3. Logika untuk Mobile Menu Toggle (Opsional)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// 1. Logika Klik Hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 2. Tutup Menu saat salah satu link diklik (opsional tapi disarankan)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});