import React, { useEffect, useState } from 'react';
import { ExternalLink, Code, Music, Timer, Gamepad2, Palette, Globe, Zap, Users, Eye, Calendar, Clock, ChevronDown } from 'lucide-react';

interface HomePageProps {
  mousePosition: { x: number; y: number };
  scrollY: number;
}

const HomePage: React.FC<HomePageProps> = ({ mousePosition, scrollY }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [runtime, setRuntime] = useState('');
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  
  const fullText = 'Weberry';

  useEffect(() => {
    // 计算网站运行时间
    const startTime = new Date('2025-08-04T10:44:00').getTime();
    
    const updateRuntime = () => {
      const now = new Date().getTime();
      const diff = now - startTime;
      
      if (diff < 0) {
        setRuntime('网站尚未启动');
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setRuntime(`${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`);
    };
    
    updateRuntime();
    const interval = setInterval(updateRuntime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  const projects = [
    {
      name: 'XYCRAFT 2025 (Pre5 1.04922)',
      description: '使用WebGL高仿版我的世界3D游戏体验（鸽了n年的XYCRAFT续作）（如果加载失败就刷新几次）',
      icon: <Gamepad2 className="w-8 h-8" />,
      gradient: 'from-emerald-400 to-teal-600',
      link: 'https://majestic-lolly-f62d2c.netlify.app/'
    },
    {
      name: '破忒头 Focus',
      description: '专注番茄钟  极致体验   超多功能（音乐播放，未来倒计时，全屏时钟，白噪音）（tips：计时按暂停无效）',
      icon: <Timer className="w-8 h-8" />,
      gradient: 'from-orange-400 to-red-500',
      link: 'https://potofocus.netlify.app/'
    },
    {
      name: 'weberry音乐',
      description: 'HTML开发  网易云音乐超大曲库  极简设计理念  轻量级音乐播放器 支持全设备访问',
      icon: <Music className="w-8 h-8" />,
      gradient: 'from-purple-400 to-pink-500',
      link: 'https://weberry.netlify.app/'
    }
  ];

  const recommendations = [
    {
      name: '有趣小功能',
      description: '实用工具集合',
      icon: <Zap className="w-6 h-6" />,
      link: 'https://tools.miku.ac/',
      color: 'text-yellow-500'
    },
    {
      name: '有趣网站推荐',
      description: '精选网站导航',
      icon: <Globe className="w-6 h-6" />,
      link: 'https://lkssite.vip/',
      color: 'text-blue-500'
    },
    {
      name: 'Emoji Mix',
      description: '表情符号生成器',
      icon: <Palette className="w-6 h-6" />,
      link: 'https://tikolu.net/emojimix/',
      color: 'text-pink-500'
    },
    {
      name: '我的世界网页版',
      description: '在线游戏体验',
      icon: <Code className="w-6 h-6" />,
      link: 'https://www.mc.js.cool/',
      color: 'text-green-500'
    }
  ];

  const stats = [
    { label: '总访问量', id: 'busuanzi_site_pv', icon: <Eye className="w-5 h-5" /> },
    { label: '总访客数', id: 'busuanzi_site_uv', icon: <Users className="w-5 h-5" /> },
    { label: '今日访问量', id: 'busuanzi_today_site_pv', icon: <Calendar className="w-5 h-5" /> },
    { label: '今日访客数', id: 'busuanzi_today_site_uv', icon: <Clock className="w-5 h-5" /> }
  ];

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center px-6">
          <div 
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8 leading-none">
              {displayedText}
              {isTyping && <span className="animate-pulse border-b-8 border-slate-900 inline-block align-bottom">_</span>}
            </h1>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-slate-700 mb-16 tracking-wide">
              Studio
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-slate-600 max-w-5xl mx-auto leading-relaxed mb-20">
              工作室？（就一个人...<br />
            </p>
            
            {/* Scroll indicator */}
            <button 
              onClick={scrollToContent}
              className="group inline-flex flex-col items-center text-slate-500 hover:text-slate-700 transition-all duration-300 animate-bounce"
            >
              <span className="text-lg mb-3 opacity-70">探索更多</span>
              <ChevronDown className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              我们的项目
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              每一个项目都有数不尽的bug...
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="group relative backdrop-blur-2xl bg-white/30 rounded-3xl p-10 border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110 hover:bg-white/50 hover:z-10 peer overflow-hidden"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  transform: `translateY(${Math.max(0, scrollY - 800) * -0.1}px)`
                }}
                onMouseEnter={() => setHoveredElement(`project-${index}`)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                {/* Mouse follower text effect */}
                {hoveredElement === `project-${index}` && (
                  <div
                    className="fixed pointer-events-none z-50 text-6xl font-bold text-white/80 transition-all duration-300 ease-out"
                    style={{
                      left: mousePosition.x - 100,
                      top: mousePosition.y - 30,
                      textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(59,130,246,0.3)',
                      transform: 'scale(1.5)',
                    }}
                  >
                    {project.name.split(' ')[0]}
                  </div>
                )}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{project.name}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">{project.description}</p>
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold text-lg group-hover:translate-x-2 transition-all duration-300"
                  >
                    访问项目 <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              推荐链接
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              精心挑选的优质资源与工具
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recommendations.map((item, index) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block backdrop-blur-2xl bg-white/30 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/50 overflow-hidden"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: `translateY(${Math.max(0, scrollY - 1400) * -0.05}px)`
                }}
                onMouseEnter={() => setHoveredElement(`rec-${index}`)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                {/* Mouse follower text effect for recommendations */}
                {hoveredElement === `rec-${index}` && (
                  <div
                    className="fixed pointer-events-none z-50 text-4xl font-bold text-white/80 transition-all duration-300 ease-out"
                    style={{
                      left: mousePosition.x - 80,
                      top: mousePosition.y - 20,
                      textShadow: '0 0 15px rgba(255,255,255,0.5), 0 0 30px rgba(59,130,246,0.3)',
                      transform: 'scale(1.3)',
                    }}
                  >
                    {item.name}
                  </div>
                )}
                <div className={`${item.color} mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.name}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-2xl bg-white/30 rounded-[3rem] p-12 md:p-16 border border-white/40 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              访问统计
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className="text-center backdrop-blur-sm bg-white/20 rounded-3xl p-8 border border-white/30 hover:bg-white/40 transition-all duration-500 hover:scale-110 group"
                >
                  <div className="flex justify-center mb-4 text-blue-600 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    <span id={stat.id}>加载中...</span>
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Additional stats */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
                  <div className="text-lg text-slate-600 mb-1">本页阅读量</div>
                  <div className="text-2xl font-bold text-slate-800">
                    <span id="busuanzi_page_pv">加载中...</span> 次
                  </div>
                </div>
                <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
                  <div className="text-lg text-slate-600 mb-1">本页访客数</div>
                  <div className="text-2xl font-bold text-slate-800">
                    <span id="busuanzi_page_uv">加载中...</span> 人
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 text-center relative z-10">
        <div className="backdrop-blur-2xl bg-white/20 rounded-3xl max-w-3xl mx-auto p-12 border border-white/30 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Weberry Studio</h3>
          <div className="mb-6 p-4 backdrop-blur-sm bg-white/20 rounded-2xl border border-white/30">
            <div className="text-lg text-slate-600 mb-2">网站已运行</div>
            <div className="text-2xl font-bold text-slate-800 font-mono">
              {runtime}
            </div>
          </div>
          <p className="text-slate-600 mb-6 text-lg">
            © 2025 Weberry Studio - 专注创新与美学
          </p>
          <p className="text-slate-500">
            让每一个创意都闪闪发光 ✨
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;