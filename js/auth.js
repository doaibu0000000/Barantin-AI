// --- LOGIN LOGIC ---
const loginScreen = document.getElementById('login-screen');
const dashboardScreen = document.getElementById('dashboard-screen');

const togglePw = document.getElementById('toggle-pw');
const pwInput = document.getElementById('password');
const captchaDisplay = document.getElementById('captcha-display');
const refreshCaptcha = document.getElementById('refresh-captcha');
let currentCaptcha = "";

export function generateCaptcha() {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  currentCaptcha = result;
  if (captchaDisplay) captchaDisplay.textContent = result;
}

if (refreshCaptcha) {
  generateCaptcha();
  refreshCaptcha.addEventListener('click', generateCaptcha);
}

if (togglePw) {
  togglePw.addEventListener('click', () => {
    if (pwInput.type === "password") {
      pwInput.type = "text";
      togglePw.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><line x1="1" y1="1" x2="23" y2="23"></line>'; // Eye off
    } else {
      pwInput.type = "password";
      togglePw.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>'; // Eye
    }
  });
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const captchaInput = document.getElementById('captcha-input').value;
    const errorMsg = document.getElementById('login-error');
    
    if (captchaInput.toUpperCase() !== currentCaptcha) {
      errorMsg.style.display = "block";
      errorMsg.textContent = "Captcha tidak cocok, silakan coba lagi.";
      generateCaptcha();
      document.getElementById('captcha-input').value = "";
    } else {
      errorMsg.style.display = "none";
      if(loginScreen) loginScreen.classList.remove('active');
      if(dashboardScreen) dashboardScreen.classList.add('active');
    }
  });
}
