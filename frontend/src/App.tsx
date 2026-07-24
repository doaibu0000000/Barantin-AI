import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import BottomNavbar from './components/BottomNavbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('beranda');

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab('beranda');
  };

  return (
    <div className="w-full max-w-[480px] min-h-screen relative overflow-hidden flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.5)] app-container">
      {!isAuthenticated ? (
        <Login onLoginSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <>
          {activeTab === 'beranda' && <Dashboard />}
          {activeTab !== 'beranda' && (
            <div className="flex flex-col flex-1 w-full h-full absolute top-0 left-0 right-0 bottom-0 overflow-y-auto pb-[100px] justify-center items-center text-text-dim">
              <p>Halaman {activeTab} sedang dalam pengembangan</p>
            </div>
          )}
          <BottomNavbar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            onLogout={handleLogout} 
          />
        </>
      )}
    </div>
  );
}

export default App;
