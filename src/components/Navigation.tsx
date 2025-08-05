import React, { useState, useEffect } from 'react';
import { Home, Users, Info, ExternalLink } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  mousePosition: { x: number; y: number };
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange, mousePosition }) => {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: 'home', label: '首页', icon: <Home className="w-5 h-5" /> },
    { id: 'cooperation', label: '合作', icon: <Users className="w-5 h-5" /> },
    { id: 'about', label: '关于', icon: <Info className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const activeItem = document.querySelector(`[data-nav="${currentPage}"]`) as HTMLElement;
    if (activeItem) {
      const rect = activeItem.getBoundingClientRect();
      const container = activeItem.parentElement?.getBoundingClientRect();
      if (container) {
        setIndicatorStyle({
          left: rect.left - container.left,
          width: rect.width
        });
      }
    }
  }, [currentPage]);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* 玻璃反光效果 */}
      <div 
        className="absolute inset-0 rounded-full opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)`,
          transform: `translate(${Math.sin(Date.now() * 0.001) * 2}px, ${Math.cos(Date.now() * 0.001) * 1}px)`,
        }}
      />
      
      {/* 主导航容器 */}
      <div className="relative backdrop-blur-2xl bg-white/20 rounded-full px-2 py-2 border border-white/30 shadow-2xl">
        {/* 玻璃内反光 */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="absolute inset-1 rounded-full bg-gradient-to-tl from-white/20 via-transparent to-white/10 opacity-80 pointer-events-none" />
        
        {/* 活动指示器 */}
        <div
          className="absolute top-2 h-12 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full transition-all duration-500 ease-out backdrop-blur-sm border border-white/20 shadow-lg"
          style={{
            left: indicatorStyle.left + 8,
            width: indicatorStyle.width,
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
          }}
        />
        
        {/* 导航项 */}
        <div className="relative flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              data-nav={item.id}
              onClick={() => onPageChange(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`
                relative px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 group
                ${currentPage === item.id 
                  ? 'text-white font-semibold' 
                  : 'text-slate-700 hover:text-slate-900'
                }
              `}
            >
              {/* 悬停效果 */}
              {hoveredItem === item.id && currentPage !== item.id && (
                <div className="absolute inset-0 bg-white/20 rounded-full backdrop-blur-sm border border-white/30" />
              )}
              
              <div className={`transition-all duration-300 ${currentPage === item.id ? 'scale-110' : 'group-hover:scale-105'}`}>
                {item.icon}
              </div>
              <span className="font-medium">{item.label}</span>
              
              {/* 活跃状态的光晕 */}
              {currentPage === item.id && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20 blur-sm animate-pulse" />
              )}
            </button>
          ))}
        </div>
        
        {/* 底部高光 */}
        <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
      
      {/* 外部阴影和反光 */}
      <div className="absolute inset-0 rounded-full shadow-2xl opacity-50 pointer-events-none" 
           style={{ 
             boxShadow: '0 8px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)' 
           }} />
    </nav>
  );
};

export default Navigation;