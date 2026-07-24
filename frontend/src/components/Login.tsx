import { useState, useEffect } from 'react';

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaData, setCaptchaData] = useState({ value: '' });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [error, setError] = useState('');

  const generateCaptcha = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaData({ value: result });
    setCaptchaInput('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (captchaInput.toUpperCase() !== captchaData.value) {
      setError('Captcha salah, silakan coba lagi');
      generateCaptcha();
      return;
    }

    if (username === 'admin' && password === 'admin') {
      onLoginSuccess();
    } else {
      setError('Username atau password salah');
      generateCaptcha();
    }
  };

  return (
    <div className="flex flex-col flex-1 w-full h-full absolute top-0 left-0 right-0 bottom-0 overflow-y-auto px-6 py-10 justify-center">
      <div className="text-center mb-10">
        <h1 className="text-[26px] text-text-bright mb-2">Masuk</h1>
        <p className="text-text-dim text-sm">Silakan masuk ke akun Barantin Anda</p>
      </div>
      
      <div className="bg-navy-card rounded-2xl p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5">
        <form onSubmit={handleLogin}>
          <div className="mb-5 relative">
            <label className="block text-text-dim text-[13px] mb-2">Username</label>
            <div className="relative flex items-center">
              <svg className="absolute left-3.5 w-5 h-5 stroke-text-dim fill-none stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#3b3b3b] border border-white/10 rounded-xl py-3.5 pl-11 pr-3.5 text-text-bright text-[15px] outline-none transition-colors focus:border-teal-DEFAULT" 
                placeholder="Masukkan username" 
                required 
              />
            </div>
          </div>

          <div className="mb-5 relative">
            <label className="block text-text-dim text-[13px] mb-2">Kata Laluan</label>
            <div className="relative flex items-center">
              <svg className="absolute left-3.5 w-5 h-5 stroke-text-dim fill-none stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#3b3b3b] border border-white/10 rounded-xl py-3.5 pl-11 pr-11 text-text-bright text-[15px] outline-none transition-colors focus:border-teal-DEFAULT" 
                placeholder="Masukkan kata laluan" 
                required 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 cursor-pointer text-text-dim flex items-center justify-center"
              >
                <svg className="w-5 h-5 stroke-current fill-none stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {showPassword ? (
                    <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><line x1="1" y1="1" x2="23" y2="23"></line></>
                  ) : (
                    <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex gap-3 items-center mb-6">
            <div className="bg-white text-black text-[22px] font-extrabold font-mono tracking-widest px-4 py-2.5 rounded-lg line-through select-none min-w-[120px] text-center">
              {captchaData.value || '...'}
            </div>
            <button 
              type="button" 
              onClick={generateCaptcha}
              className="bg-white/10 border-none rounded-lg p-2.5 cursor-pointer text-text-bright flex items-center justify-center transition-colors hover:bg-white/20 h-[50px] w-[50px]"
            >
              <svg className="w-6 h-6 stroke-current fill-none stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
            </button>
            <input 
              type="text" 
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="flex-1 bg-[#3b3b3b] border border-white/10 rounded-lg p-3 text-text-bright text-[15px] outline-none w-full focus:border-teal-DEFAULT h-[50px]" 
              placeholder="Ketik kode" 
              required 
            />
          </div>

          <button type="submit" className="w-full bg-teal-DEFAULT hover:bg-teal-dark active:scale-98 text-black border-none rounded-xl p-4 text-[16px] font-semibold cursor-pointer transition-all">
            Masuk Sekarang
          </button>
          
          {error && <p className="text-[#ff4d4d] text-[13px] mt-2 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}
