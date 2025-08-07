import React from 'react';
import { ExternalLink, Users, Code, Zap, Heart, Star, Trophy, Target } from 'lucide-react';

interface CooperationPageProps {
  mousePosition: { x: number; y: number };
  scrollY: number;
}

const CooperationPage: React.FC<CooperationPageProps> = ({ mousePosition, scrollY }) => {
  const teamFeatures = [
    {
      icon: <Code className="w-8 h-8" />,
      title: '技术交流',
      description: '分享编程经验，共同解决技术难题',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '团队协作',
      description: '多人项目开发，提升团队合作能力',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '创新实践',
      description: '探索新技术，实现创意想法',
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  const achievements = [
    { label: '团队成员', value: '-1', icon: <Users className="w-6 h-6" /> },
    { label: '完成项目', value: '-5', icon: <Target className="w-6 h-6" /> },
    { label: '获得奖项', value: '∞', icon: <Trophy className="w-6 h-6" /> },
    { label: '代码贡献', value: '∞', icon: <Code className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div 
            className="mb-12"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8">
              团队合作
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              加入我们的洛谷团队，与志同道合的伙伴一起探索编程的无限可能
            </p>
            
            {/* 洛谷团队链接 */}
            <div className="backdrop-blur-2xl bg-white/30 rounded-3xl p-8 border border-white/40 shadow-2xl max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-white shadow-lg">
                  <Users className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">洛谷团队</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                我们在洛谷平台建立了专业的编程团队，欢迎所有热爱编程的朋友加入我们！
              </p>
              <a
                href="https://www.luogu.com.cn/team/110445"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                加入团队 <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Features */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              团队特色
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              我们提供全方位的学习和成长环境
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group backdrop-blur-2xl bg-white/30 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/50"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: `translateY(${Math.max(0, scrollY - 600) * -0.05}px)`
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-2xl bg-white/30 rounded-[3rem] p-12 md:p-16 border border-white/40 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              团队成就
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className="text-center backdrop-blur-sm bg-white/20 rounded-3xl p-8 border border-white/30 hover:bg-white/40 transition-all duration-500 hover:scale-110 group"
                >
                  <div className="flex justify-center mb-4 text-blue-600 group-hover:scale-125 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-slate-600 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-2xl bg-white/30 rounded-3xl p-12 border border-white/40 shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white shadow-lg">
                <Heart className="w-10 h-10" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              期待你的加入
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              无论你是编程新手还是资深开发者，我们都欢迎你的到来。<br />
              서로에게서 배우고 프로그래밍의 길에서 함께 성장합시다!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.luogu.com.cn/team/110445"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                立即加入 <ExternalLink className="w-5 h-5" />
              </a>
              <button className="inline-flex items-center gap-3 backdrop-blur-sm bg-white/20 text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                了解更多 <Star className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CooperationPage;