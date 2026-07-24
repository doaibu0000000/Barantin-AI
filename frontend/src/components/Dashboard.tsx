export default function Dashboard() {
  const summary = {
    dokumen_diproses: 142,
    recent_activities: [
      {
        title: "Verifikasi Dokumen #K-1029",
        time: "Hari ini, 09:41 WIB",
        status: "success",
        status_text: "Selesai"
      },
      {
        title: "Pengajuan Karantina #K-1030",
        time: "Kemarin, 14:20 WIB",
        status: "pending",
        status_text: "Proses"
      }
    ]
  };

  return (
    <div className="flex flex-col flex-1 w-full h-full absolute top-0 left-0 right-0 bottom-0 overflow-y-auto pb-[100px]">
      <div className="pt-[30px] px-5 pb-5 flex justify-between items-center">
        <div>
          <h2 className="text-xl text-text-bright font-semibold">Beranda</h2>
          <p className="text-text-dim text-[13px] mt-1">Selamat datang kembali, Petugas</p>
        </div>
        <button className="relative bg-navy-card border border-white/10 rounded-full w-11 h-11 flex justify-center items-center cursor-pointer">
          <svg className="w-5 h-5 stroke-text-bright fill-none stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="absolute top-2.5 right-3 w-2 h-2 bg-[#ff4d4d] rounded-full"></span>
        </button>
      </div>

      <div className="px-5">
        <div className="bg-gradient-to-br from-navy-card to-[#0a1730] rounded-2xl p-6 border border-gold-DEFAULT/25 mb-6 flex justify-between items-center">
          <div>
            <h3 className="text-[14px] text-text-dim font-medium mb-2">Dokumen Diproses</h3>
            <div className="text-[28px] font-bold text-gold-DEFAULT">{summary.dokumen_diproses}</div>
          </div>
          <div>
            <svg className="w-12 h-12 stroke-gold-DEFAULT/20 fill-gold-DEFAULT/10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-7">
          {[
            { label: 'Pindai', icon: <path d="M4 3h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path> },
            { label: 'Arsip', icon: <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> },
            { label: 'Analisis', icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline> },
            { label: 'Laporan', icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline> }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-[50px] h-[50px] bg-navy-card rounded-xl flex justify-center items-center border border-white/5 transition-colors group-hover:bg-teal-DEFAULT/10 group-hover:border-teal-DEFAULT">
                <svg className="w-6 h-6 stroke-teal-DEFAULT fill-none stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              <span className="text-[12px] text-text-bright text-center">{item.label}</span>
            </div>
          ))}
        </div>
        
        <div>
          <h3 className="text-[16px] mb-4 text-text-bright font-semibold">Aktivitas Terkini</h3>
          <div className="flex flex-col gap-3">
            {summary.recent_activities.map((activity: any, idx: number) => (
              <div key={idx} className="bg-navy-card p-4 rounded-xl flex justify-between items-center border border-white/5">
                <div>
                  <h4 className="text-[14px] mb-1 text-text-bright font-medium">{activity.title}</h4>
                  <p className="text-[12px] text-text-dim">{activity.time}</p>
                </div>
                <span className={`text-[11px] py-1 px-2.5 rounded-full font-semibold ${activity.status === 'success' ? 'bg-teal-DEFAULT/10 text-teal-DEFAULT' : 'bg-gold-soft/10 text-gold-soft'}`}>
                  {activity.status_text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
