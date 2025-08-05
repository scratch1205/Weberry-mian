import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
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
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden cursor-none">
      {/* Custom cursor */}
      <div 
        className="fixed w-8 h-8 backdrop-blur-md bg-white/30 rounded-full pointer-events-none z-50 border border-white/50 shadow-2xl transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        }}
      />
      <div 
        className="fixed w-2 h-2 bg-white/80 rounded-full pointer-events-none z-50 shadow-sm"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
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

      {/* Page Content */}
      <main className="relative z-10">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;