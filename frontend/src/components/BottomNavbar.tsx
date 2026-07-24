interface BottomNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

export default function BottomNavbar({ activeTab, setActiveTab, onLogout }: BottomNavbarProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[88px] bg-[#0a1428]/95 backdrop-blur-[10px] border-t border-white/5 flex items-start justify-around pt-2.5 z-50">
      <button 
        onClick={() => setActiveTab('beranda')}
        className={`flex flex-col items-center gap-1 text-[11px] bg-transparent border-none cursor-pointer w-16 transition-colors ${activeTab === 'beranda' ? 'text-teal-DEFAULT' : 'text-text-dim'}`}
      >
        <svg className={`w-[22px] h-[22px] fill-none stroke-[1.8] transition-colors ${activeTab === 'beranda' ? 'stroke-teal-DEFAULT' : 'stroke-text-dim'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>Beranda</span>
      </button>

      <button 
        onClick={() => setActiveTab('layanan')}
        className={`flex flex-col items-center gap-1 text-[11px] bg-transparent border-none cursor-pointer w-16 transition-colors ${activeTab === 'layanan' ? 'text-teal-DEFAULT' : 'text-text-dim'}`}
      >
        <svg className={`w-[22px] h-[22px] fill-none stroke-[1.8] transition-colors ${activeTab === 'layanan' ? 'stroke-teal-DEFAULT' : 'stroke-text-dim'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
        <span>Layanan</span>
      </button>

      <div className="relative w-16 flex justify-center">
        <button 
          onClick={() => alert("Membuka Asisten AI...")}
          className="absolute -top-[30px] w-[60px] h-[60px] rounded-full flex items-center justify-center border-none cursor-pointer transition-transform hover:scale-105"
          style={{ 
            background: 'radial-gradient(circle at 30% 30%, #F0D97A, #D4AF37 60%, #a9822b 100%)',
            boxShadow: '0 8px 20px rgba(212,175,55,0.45), 0 0 0 6px #0A1428' 
          }}
        >
          <svg className="w-[28px] h-[28px] stroke-[#0a1428] fill-none stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
            <path d="M12 12 2.1 7.1"></path>
            <path d="m12 12 4.9 8.5"></path>
          </svg>
        </button>
        <span className="mt-[34px] text-[11px] text-gold-soft font-semibold">Tanya AI</span>
      </div>

      <button 
        onClick={() => setActiveTab('dokumen')}
        className={`flex flex-col items-center gap-1 text-[11px] bg-transparent border-none cursor-pointer w-16 transition-colors ${activeTab === 'dokumen' ? 'text-teal-DEFAULT' : 'text-text-dim'}`}
      >
        <svg className={`w-[22px] h-[22px] fill-none stroke-[1.8] transition-colors ${activeTab === 'dokumen' ? 'stroke-teal-DEFAULT' : 'stroke-text-dim'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span>Dokumen</span>
      </button>

      <button 
        onClick={() => {
          if (confirm("Apakah Anda ingin keluar?")) {
            onLogout();
          }
        }}
        className={`flex flex-col items-center gap-1 text-[11px] bg-transparent border-none cursor-pointer w-16 transition-colors ${activeTab === 'profil' ? 'text-teal-DEFAULT' : 'text-text-dim'}`}
      >
        <svg className={`w-[22px] h-[22px] fill-none stroke-[1.8] transition-colors ${activeTab === 'profil' ? 'stroke-teal-DEFAULT' : 'stroke-text-dim'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>Profil</span>
      </button>
    </div>
  );
}
