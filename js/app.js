import { generateCaptcha } from './auth.js';

// --- NAVBAR LOGIC ---
const loginScreen = document.getElementById('login-screen');
const dashboardScreen = document.getElementById('dashboard-screen');

document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Demo logout on profile click
    if (btn.id === 'nav-profile') {
      if(confirm("Apakah Anda ingin keluar?")) {
        if(dashboardScreen) dashboardScreen.classList.remove('active');
        if(loginScreen) loginScreen.classList.add('active');
        generateCaptcha();
        const loginForm = document.getElementById('login-form');
        if(loginForm) loginForm.reset();
        
        // Reset active to beranda
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.nav-item')[0].classList.add('active');
      }
    }
  });
});

const navCenter = document.querySelector('.nav-center');
if (navCenter) {
  navCenter.addEventListener('click', () => {
    alert("Membuka Asisten AI...");
  });
}

// --- PWA SERVICE WORKER REGISTRATION ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
