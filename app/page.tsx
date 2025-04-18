import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, Twitter, Zap, Code, Cpu, Monitor, Paintbrush, Layers, Glasses, Video } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 导航栏 */}
      <header className="fixed w-full z-50 backdrop-blur-md bg-black/50 border-b border-pink-500/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-pink-500" />
            <span className="font-bold text-xl tracking-wider">
              CYBER<span className="text-pink-500">PULSE</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-sm hover:text-pink-400 transition-colors">
              关于
            </Link>
            <Link href="#projects" className="text-sm hover:text-pink-400 transition-colors">
              项目
            </Link>
            <Link href="#skills" className="text-sm hover:text-pink-400 transition-colors">
              技能
            </Link>
            <Link href="#contact" className="text-sm hover:text-pink-400 transition-colors">
              联系
            </Link>
          </nav>
          <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
            联系我
          </Button>
        </div>
      </header>

      {/* 角色区域 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/40 bg-cover bg-center opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        {/* 故障效果装饰 */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 border border-pink-500 text-pink-500 text-xs font-mono rounded-full mb-4 animate-pulse">
              赛博世界的创造者
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight glitch-text">
              <span className="block">未来主义</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                数字艺术家
              </span>
            </h1>
            <p className="text-gray-400 max-w-md">在数字与现实的边界创造前卫设计。融合科技与艺术，打造未来视觉体验。</p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0">
                查看作品
              </Button>
              <Link href="/about">
                <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-xl opacity-70 animate-pulse" />
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-pink-500/50">
                <div className="w-full h-full">
                  <CyberpunkImage width={400} height={400} text="CYBER" />
                </div>
              </div>
              <div className="absolute -inset-1 border-2 border-dashed border-pink-500/30 rounded-full animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-xs text-gray-400 mb-2">向下滚动</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-pink-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* 关于部分 */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-blue-500 opacity-30 blur-xl rounded-lg" />
                <div className="relative border border-pink-500/30 rounded-lg overflow-hidden">
                  <div className="w-full h-[400px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558481795-7f0a7c906f5e?q=80&w=1000')] bg-cover bg-center mix-blend-luminosity opacity-70"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 to-purple-900/30"></div>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 bg-grid-white/10 bg-grid-8"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-6 py-3 bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-lg">
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400">
                          数字艺术家工作室
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500"></div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 border border-pink-500 text-pink-500 text-xs font-mono rounded-full">
                关于我
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                在数字与现实的<span className="text-pink-500">边界</span>创造
              </h2>
              <p className="text-gray-400">
                我是一名专注于赛博朋克美学的数字艺术家和设计师。我的作品融合了未来主义、复古科技和城市文化元素，创造出独特的视觉体验。
              </p>
              <p className="text-gray-400">
                通过结合前沿技术和艺术表达，我致力于探索数字时代的新可能性，打造令人惊叹的沉浸式体验。
              </p>
              <div className="pt-4 flex gap-4">
                <Link href="#" className="text-pink-500 hover:text-pink-400 transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-pink-500 hover:text-pink-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-pink-500 hover:text-pink-400 transition-colors">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
              <div className="pt-4">
                <Link href="/about">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0">
                    查看完整简介
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 项目部分 */}
      <section id="projects" className="py-20 relative overflow-hidden bg-black/80">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 border border-pink-500 text-pink-500 text-xs font-mono rounded-full mb-4">
              我的作品
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              精选<span className="text-pink-500">项目</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              探索我的创意世界，这些项目展示了我对赛博朋克美学的热情和技术能力。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "人形机器人",
                image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1000",
                description: "融合人类外形与先进AI的赛博朋克人形机器人，展现人机共生的未来愿景。",
              },
              {
                id: 2,
                title: "复古风机器人",
                image: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?q=80&w=1000",
                description: "蒸汽朋克与数字时代的完美结合，破损外观下蕴藏着未来科技的机械生命。",
              },
              {
                id: 3,
                title: "未来科技风机器人",
                image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000",
                description: "配备反重力推进系统的高级AI机器人，能够在空中自由飞行，展现极致科技美学。",
              },
            ].map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-blue-500 opacity-30 blur-sm group-hover:opacity-100 transition-all duration-300 rounded-lg" />
                <div className="relative border border-pink-500/30 rounded-lg overflow-hidden h-full bg-black/50 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 to-purple-900/30 mix-blend-color-dodge"></div>
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute inset-0 bg-grid-white/10 bg-grid-8"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                      {project.id === 2 && <div className="absolute inset-0 rust-overlay opacity-40"></div>}
                      {project.id === 3 && <div className="absolute inset-0 hover-lines opacity-30"></div>}
                      <div className="absolute inset-0 glitch-overlay opacity-20"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex gap-2">
                      <span className="inline-block px-2 py-1 bg-pink-500/10 text-pink-500 text-xs rounded">设计</span>
                      <span className="inline-block px-2 py-1 bg-blue-500/10 text-blue-500 text-xs rounded">开发</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500/10">
              查看更多项目
            </Button>
          </div>
        </div>
      </section>

      {/* 技能部分 */}
      <section id="skills" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 border border-pink-500 text-pink-500 text-xs font-mono rounded-full mb-4">
              专业能力
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              我的<span className="text-pink-500">技能</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              多年来积累的专业技能和工具，让我能够将创意转化为现实。点击卡片了解更多。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "UI/UX设计", icon: <Monitor className="h-6 w-6 text-pink-500" />, slug: "ui-ux-design" },
              { name: "3D建模", icon: <Cpu className="h-6 w-6 text-pink-500" />, slug: "3d-modeling" },
              { name: "动效设计", icon: <Zap className="h-6 w-6 text-pink-500" />, slug: "motion-design" },
              { name: "前端开发", icon: <Code className="h-6 w-6 text-pink-500" />, slug: "frontend-dev" },
              {
                name: "数字插画",
                icon: <Paintbrush className="h-6 w-6 text-pink-500" />,
                slug: "digital-illustration",
              },
              { name: "品牌设计", icon: <Layers className="h-6 w-6 text-pink-500" />, slug: "brand-design" },
              { name: "AR/VR", icon: <Glasses className="h-6 w-6 text-pink-500" />, slug: "ar-vr" },
              { name: "视频剪辑", icon: <Video className="h-6 w-6 text-pink-500" />, slug: "video-editing" },
            ].map((skill, index) => (
              <Link key={index} href={`/skills/${skill.slug}`} className="block">
                <div className="relative group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-blue-500 opacity-30 blur-sm group-hover:opacity-100 transition-all duration-300 rounded-lg" />
                  <div className="relative border border-pink-500/30 rounded-lg overflow-hidden h-full p-6 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold group-hover:text-pink-500 transition-colors">{skill.name}</h3>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-pink-500">
                      查看详情
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 联系部分 */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-purple-900/20" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 border border-pink-500 text-pink-500 text-xs font-mono rounded-full mb-4">
                联系我
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                准备好开始<span className="text-pink-500">合作</span>了吗？
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                无论您有项目需求、合作提案或只是想打个招呼，都欢迎联系我。
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-blue-500 opacity-30 blur-xl rounded-lg" />
              <div className="relative border border-pink-500/30 rounded-lg overflow-hidden p-8 bg-black/50 backdrop-blur-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-400">
                        姓名
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-lg focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors"
                        placeholder="您的姓名"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-gray-400">
                        邮箱
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-lg focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors"
                        placeholder="您的邮箱"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-gray-400">
                      主题
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-lg focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors"
                      placeholder="消息主题"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-400">
                      消息
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-lg focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors resize-none"
                      placeholder="请输入您的消息..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0 py-6">
                    发送消息
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 border-t border-pink-500/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Zap className="h-5 w-5 text-pink-500" />
              <span className="font-bold text-lg tracking-wider">
                CYBER<span className="text-pink-500">PULSE</span>
              </span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CYBERPULSE. 保留所有权利。
          </div>
        </div>
      </footer>
    </div>
  )
}

// 添加这个新组件
export function CyberpunkImage({
  width,
  height,
  text,
  className,
}: { width: number; height: number; text?: string; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-to-br from-pink-900/30 to-purple-900/30 overflow-hidden ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <div className="absolute inset-0 bg-grid-white/5 bg-grid-8 opacity-50"></div>
      {text && <div className="relative z-10 text-pink-500 font-bold text-center px-4">{text}</div>}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500"></div>
    </div>
  )
}
