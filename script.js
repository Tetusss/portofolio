// JavaScript for Arbet Thetus Portfolio

// 1. Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// 2. Copy Email to Clipboard with Toast Notification
function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
        showToast("Email tersalin ke clipboard!");
    }).catch(err => {
        console.error("Gagal menyalin email: ", err);
        // Fallback
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast("Email tersalin ke clipboard!");
        } catch (e) {
            alert("Email: " + email);
        }
        document.body.removeChild(textArea);
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    if (message) {
        toast.querySelector('span').textContent = message;
    }

    toast.classList.remove('translate-y-16', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-16', 'opacity-0');
    }, 2500);
}

// 3. Project Detail Modals
const modalBackdrop = document.getElementById('modal-backdrop');
const modalBakalKopi = document.getElementById('modal-bakal-kopi');
const modalPodcastMl = document.getElementById('modal-podcast-ml');
const modalFordGobike = document.getElementById('modal-ford-gobike');

function openModal(projectId) {
    if (!modalBackdrop) return;
    
    // Hide all modals first
    if (modalBakalKopi) modalBakalKopi.classList.add('hidden');
    if (modalPodcastMl) modalPodcastMl.classList.add('hidden');
    if (modalFordGobike) modalFordGobike.classList.add('hidden');

    if (projectId === 'bakal-kopi' && modalBakalKopi) {
        modalBakalKopi.classList.remove('hidden');
    } else if (projectId === 'podcast-ml' && modalPodcastMl) {
        modalPodcastMl.classList.remove('hidden');
    } else if (projectId === 'ford-gobike' && modalFordGobike) {
        modalFordGobike.classList.remove('hidden');
    }

    modalBackdrop.classList.remove('hidden');
    // Micro transition
    setTimeout(() => {
        modalBackdrop.classList.remove('opacity-0');
        modalBackdrop.classList.add('opacity-100');
        const activeModal = document.querySelector('.modal-box:not(.hidden)');
        if (activeModal) activeModal.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modalBackdrop) return;
    
    modalBackdrop.classList.remove('opacity-100');
    modalBackdrop.classList.add('opacity-0');
    
    const activeModal = document.querySelector('.modal-box:not(.hidden)');
    if (activeModal) activeModal.classList.remove('active');

    setTimeout(() => {
        modalBackdrop.classList.add('hidden');
        if (modalBakalKopi) modalBakalKopi.classList.add('hidden');
        if (modalPodcastMl) modalPodcastMl.classList.add('hidden');
        if (modalFordGobike) modalFordGobike.classList.add('hidden');
        document.body.style.overflow = '';
    }, 200);
}

// Close modal on backdrop click
if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
            closeModal();
        }
    });
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// 4. Download CV Toast Feedback
const cvButtons = document.querySelectorAll('a[download]');
cvButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        showToast("Mengunduh CV_Arbet_Thetus.pdf...");
    });
});

// 5. Certificate PDF click feedback
const certLinks = document.querySelectorAll('a[href^="sertif/"]');
certLinks.forEach(link => {
    link.addEventListener('click', () => {
        showToast("Membuka dokumen sertifikat PDF...");
    });
});


