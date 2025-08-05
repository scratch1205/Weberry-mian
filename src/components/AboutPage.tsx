import React from 'react';
import { Shield, Code, Heart, Zap, Globe, Users, Award, BookOpen } from 'lucide-react';

interface AboutPageProps {
  mousePosition: { x: number; y: number };
  scrollY: number;
}

const AboutPage: React.FC<AboutPageProps> = ({ mousePosition, scrollY }) => {
  const principles = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: '开源精神',
      description: '我们相信开源的力量，致力于创建开放、透明的技术生态',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '用户至上',
      description: '始终以用户体验为核心，创造真正有价值的产品',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '持续创新',
      description: '不断探索新技术，推动数字产品的边界',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '社区共建',
      description: '与开发者社区紧密合作，共同构建更好的未来',
      gradient: 'from-blue-400 to-indigo-500'
    }
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: '技术驱动',
      description: '采用最新的Web技术栈，确保产品的先进性和稳定性'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: '全球视野',
      description: '面向全球用户，提供多语言和跨平台支持'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: '品质保证',
      description: '严格的质量控制流程，确保每个产品都达到最高标准'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: '知识分享',
      description: '积极参与技术社区，分享经验和最佳实践'
    }
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
              关于我们
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
              Weberry Studio 致力于创造有趣、实用、美观的数字产品
            </p>
          </div>
        </div>
      </section>

      {/* MIT License Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-2xl bg-white/30 rounded-3xl p-12 border border-white/40 shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                <Shield className="w-10 h-10" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
              MIT 开源许可证
            </h2>
            <div className="bg-slate-900 rounded-2xl p-8 text-green-400 font-mono text-sm leading-relaxed mb-8 overflow-x-auto">
              <pre>{`MIT License

Copyright (c) 2025 Weberry Studio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}</pre>
            </div>
            <p className="text-slate-600 text-center leading-relaxed">
              我们的项目采用 MIT 许可证，这意味着您可以自由地使用、修改和分发我们的代码。
              我们相信开源的力量，希望通过开放的方式推动技术的发展和创新。
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              核心理念
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              指导我们前进的价值观和原则
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="group backdrop-blur-2xl bg-white/30 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/50"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: `translateY(${Math.max(0, scrollY - 800) * -0.05}px)`
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{principle.title}</h3>
                <p className="text-slate-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              我们的特色
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              让我们与众不同的核心优势
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group backdrop-blur-2xl bg-white/30 rounded-3xl p-10 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/50"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: `translateY(${Math.max(0, scrollY - 1200) * -0.05}px)`
                }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-2xl bg-white/30 rounded-3xl p-12 border border-white/40 shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white shadow-lg">
                <Zap className="w-10 h-10" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              我们的愿景
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              成为连接创意与技术的桥梁，让每一个想法都能闪闪发光。<br />
              我们相信技术的力量可以改变世界，让生活变得更加美好。
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
                <div className="text-3xl font-bold text-slate-800 mb-2">2025</div>
                <div className="text-slate-600">成立年份</div>
              </div>
              <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
                <div className="text-3xl font-bold text-slate-800 mb-2">∞</div>
                <div className="text-slate-600">创意无限</div>
              </div>
              <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
                <div className="text-3xl font-bold text-slate-800 mb-2">100%</div>
                <div className="text-slate-600">开源精神</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;