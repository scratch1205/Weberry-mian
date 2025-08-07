import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import SettingsButton from './components/SettingsButton';
import HomePage from './components/HomePage';
import CooperationPage from './components/CooperationPage';
import AboutPage from './components/AboutPage';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'cooperation':
        return <CooperationPage mousePosition={mousePosition} scrollY={scrollY} />;
      case 'about':
        return <AboutPage mousePosition={mousePosition} scrollY={scrollY} />;
      default:
        return <HomePage mousePosition={mousePosition} scrollY={scrollY} />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 relative overflow-hidden cursor-none">
      {/* Custom cursor */}
      <div 
        className="fixed w-8 h-8 backdrop-blur-md bg-gradient-to-br from-sky-200 to-white rounded-full pointer-events-none z-[9999] border border-sky-300/60 transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          boxShadow: '0 12px 48px rgba(135, 206, 235, 0.6), 0 8px 24px rgba(135, 206, 235, 0.4), 0 4px 12px rgba(135, 206, 235, 0.3), 0 0 0 1px rgba(135, 206, 235, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        }}
      />
      <div 
        className="fixed w-2 h-2 bg-gradient-to-br from-sky-400 to-sky-200 rounded-full pointer-events-none z-[9999] shadow-lg"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          boxShadow: '0 4px 16px rgba(135, 206, 235, 0.8), 0 2px 8px rgba(135, 206, 235, 0.6)',
        }}
      />
      
      {/* Animated background elements */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />

      {/* Navigation */}
      <Navigation 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        mousePosition={mousePosition}
      />

      {/* Settings Button */}
      <SettingsButton mousePosition={mousePosition} />

      {/* Page Content */}
      <main className="relative z-10">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;