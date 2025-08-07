import React, { useState } from 'react';
import { Settings, X, Minus, Square } from 'lucide-react';

interface SettingsButtonProps {
  mousePosition: { x: number; y: number };
}

const SettingsButton: React.FC<SettingsButtonProps> = ({ mousePosition }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState('zh-CN');
  const [theme, setTheme] = useState('auto');
  const [animations, setAnimations] = useState(true);

  const languages = [
    { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
    { code: 'en-US', name: 'English', flag: '🇺🇸' },
    { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
    { code: 'ko-KR', name: '한국어', flag: '🇰🇷' }
  ];

  const themes = [
    { value: 'auto', name: '跟随系统' },
    { value: 'light', name: '浅色模式' },
    { value: 'dark', name: '深色模式' }
  ];

  return (
    <>
      {/* Settings Button */}
      <div className="fixed top-6 right-6 z-50">
        {/* 玻璃反光效果 */}
        <div 
          className="absolute inset-0 rounded-full opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)`,
            transform: `translate(${Math.sin(Date.now() * 0.001) * 2}px, ${Math.cos(Date.now() * 0.001) * 1}px)`,
          }}
        />
        
        {/* 主按钮容器 */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative backdrop-blur-2xl bg-white/20 rounded-full p-3 border border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
        >
          {/* 玻璃内反光 */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="absolute inset-1 rounded-full bg-gradient-to-tl from-white/20 via-transparent to-white/10 opacity-80 pointer-events-none" />
          
          <Settings className="w-6 h-6 text-slate-700 group-hover:text-slate-900 transition-colors duration-300 group-hover:rotate-90" />
          
          {/* 底部高光 */}
          <div className="absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </button>
        
        {/* 外部阴影和反光 */}
        <div className="absolute inset-0 rounded-full shadow-2xl opacity-50 pointer-events-none" 
             style={{ 
               boxShadow: '0 8px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)' 
             }} />
      </div>

      {/* Settings Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Window */}
          <div className="relative w-full max-w-md">
            {/* macOS Window */}
            <div className="backdrop-blur-2xl bg-white/90 rounded-2xl border border-white/40 shadow-2xl overflow-hidden">
              {/* Title Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/20 bg-gradient-to-r from-white/50 to-white/30">
                <div className="flex items-center space-x-3">
                  {/* macOS Traffic Lights */}
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200"
                    />
                    <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200">
                      <Minus className="w-2 h-2 text-yellow-800 opacity-0 hover:opacity-100 transition-opacity duration-200" />
                    </button>
                    <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200">
                      <Square className="w-2 h-2 text-green-800 opacity-0 hover:opacity-100 transition-opacity duration-200" />
                    </button>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-slate-800">设置</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Language Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                    🌐 语言设置
                  </h3>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                          language === lang.code
                            ? 'bg-blue-500/20 border-2 border-blue-500/40'
                            : 'bg-white/30 border-2 border-transparent hover:bg-white/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{lang.flag}</span>
                          <span className="font-medium text-slate-800">{lang.name}</span>
                        </div>
                        {language === lang.code && (
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Theme Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                    🎨 主题设置
                  </h3>
                  <div className="space-y-2">
                    {themes.map((themeOption) => (
                      <button
                        key={themeOption.value}
                        onClick={() => setTheme(themeOption.value)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                          theme === themeOption.value
                            ? 'bg-purple-500/20 border-2 border-purple-500/40'
                            : 'bg-white/30 border-2 border-transparent hover:bg-white/50'
                        }`}
                      >
                        <span className="font-medium text-slate-800">{themeOption.name}</span>
                        {theme === themeOption.value && (
                          <div className="w-2 h-2 rounded-full bg-purple-500" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Animation Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                    ✨ 动画设置
                  </h3>
                  <button
                    onClick={() => setAnimations(!animations)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                      animations
                        ? 'bg-green-500/20 border-2 border-green-500/40'
                        : 'bg-white/30 border-2 border-transparent hover:bg-white/50'
                    }`}
                  >
                    <span className="font-medium text-slate-800">启用动画效果</span>
                    <div className={`w-12 h-6 rounded-full transition-all duration-300 ${
                      animations ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 mt-0.5 ${
                        animations ? 'translate-x-6 ml-1' : 'translate-x-0 ml-0.5'
                      }`} />
                    </div>
                  </button>
                </div>

                {/* About Section */}
                <div className="pt-4 border-t border-white/20">
                  <div className="text-center space-y-2">
                    <p className="text-sm text-slate-600">Weberry Studio</p>
                    <p className="text-xs text-slate-500">版本 1.0.0</p>
                    <p className="text-xs text-slate-500">© 2025 保留所有权利</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsButton;