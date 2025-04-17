import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Mail, Twitter, Zap, Download, Calendar, MapPin, GraduationCap, Award } from "lucide-react"

export default function AboutPage() {
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
            <Link href="/about" className="text-sm text-pink-400 transition-colors">
              关于
            </Link>
            <Link href="/#projects" className="text-sm hover:text-pink-400 transition-colors">
              项目
            </Link>
            <Link href="/#skills" className="text-sm hover:text-pink-400 transition-colors">
              技能
            </Link>
            <Link href="/#contact" className="text-sm hover:text-pink-400 transition-colors">
              联系
            </Link>
          </nav>
          <Link href="/">
            <Button variant="outline" size="sm" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> 返回首页
            </Button>
          </Link>
        </div>
      </header>

      {/* 个人简介头部 */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-blue-500 opacity-30 blur-xl rounded-full" />
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-2 border-pink-500/50">
                  <div className="w-full h-full bg-gradient-to-br from-pink-900/30 to-purple-900/30 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1000')] bg-cover bg-center opacity-80 mix-blend-luminosity"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 to-purple-900/30"></div>
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="absolute inset-0 glitch-overlay opacity-10"></div>
                  </div>
                </div>
                <div className="absolute -inset-1 border-2 border-dashed border-pink-500/30 rounded-full animate-spin-slow" />
              </div>
            </div>
            <div className="md:w-2/3 space-y-6">
              <div className="inline-block px-3 py-1 border border-pink-500 text-pink-500 text-xs font-mono rounded-full">
                数字艺术家 / 设计师 / 开发者
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="block">可乐阿泽</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                  COLA AZE
                </span>
              </h1>
              <p className="text-gray-300 max-w-2xl">
                我是一名专注于赛博朋克美学的数字艺术家和设计师。我的作品融合了未来主义、复古科技和城市文化元素，创造出独特的视觉体验。通过结合前沿技术和艺术表达，我致力于探索数字时代的新可能性，打造令人惊叹的沉浸式体验。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="h-4 w-4 text-pink-500" />
                  <span>2095年出生</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-4 w-4 text-pink-500" />
                  <span>新上海，中国</span>
                </div>
              </div>
              <div className="flex gap-4 pt-2">
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
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0">
                  <Download className="mr-2 h-4 w-4" /> 下载简历
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 个人经历 */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 border border-pink-500 text-pink-500 text-xs font-mono rounded-full mb-4">
                我的旅程
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                职业<span className="text-pink-500">经历</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                我的职业生涯充满了创意探索和技术突破，每一步都在推动我成为更好的数字艺术家。
              </p>
            </div>

            <div className="space-y-12">
              {/* 时间线项目 */}
              {[
                {
                  period: "2120 - 至今",
                  title: "首席创意官",
                  company: "NeoTech Labs",
                  description:
                    "领导创意团队开发前沿数字体验和沉浸式项目。负责公司视觉识别系统和品牌战略的制定与执行。推动创新技术与艺术表达的融合，打造多个获奖项目。",
                },
                {
                  period: "2117 - 2120",
                  title: "高级UI/UX设计师",
                  company: "Cyber Solutions Inc.",
                  description:
                    "设计并实现了多个大型企业的数字产品界面。负责用户研究、原型设计和交互设计，提升用户体验和产品满意度。开发了公司内部设计系统，提高了团队工作效率。",
                },
                {
                  period: "2115 - 2117",
                  title: "自由数字艺术家",
                  company: "独立工作室",
                  description:
                    "为多个国际客户提供数字艺术和设计服务。创作了多个病毒式传播的数字艺术作品。参与多个艺术展览，作品被多家数字艺术馆收藏。",
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-px h-full bg-gradient-to-b from-pink-500 to-transparent" />
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <div className="inline-block px-3 py-1 bg-pink-500/10 text-pink-500 text-xs rounded-full mb-2">
                        {item.period}
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-400">{item.company}</p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-pink-500 border-4 border-black" />
                    <div className="md:w-1/2 md:pl-12">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-blue-500 opacity-10 blur-md rounded-lg" />
                        <div className="relative border border-pink-500/30 rounded-lg p-4 bg-black/50 backdrop-blur-sm">
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 教育背景 */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 border border-pink-500 text-pink-500 text-xs font-mono rounded-full mb-4">
                学习之路
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                教育<span className="text-pink-500">背景</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                我的学术背景为我的创意实践提供了坚实的理论基础和技术支持。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  period: "2112 - 2115",
                  degree: "数字艺术硕士",
                  school: "新上海艺术学院",
                  description: "专注于沉浸式数字体验和交互设计研究。毕业作品《数字意识》获得年度最佳创新奖。",
                  icon: <GraduationCap className="h-6 w-6 text-pink-500" />,
                },
                {
                  period: "2108 - 2112",
                  degree: "视觉传达设计学士",
                  school: "中央设计学院",
                  description: "学习平面设计、UI/UX设计和数字媒体艺术。多次获得校级设计比赛一等奖。",
                  icon: <GraduationCap className="h-6 w-6 text-pink-500" />,
                },
                {
                  period: "2117",
                  degree: "高级交互设计认证",
                  school: "全球设计协会",
                  description: "专业认证课程，专注于前沿交互设计方法和技术。",
                  icon: <Award className="h-6 w-6 text-pink-500" />,
                },
                {
                  period: "2116",
                  degree: "人工智能艺术创作",
                  school: "技术与艺术研究所",
                  description: "探索AI在创意领域的应用，学习算法艺术创作技术。",
                  icon: <Award className="h-6 w-6 text-pink-500" />,
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-blue-500 opacity-10 blur-md rounded-lg" />
                  <div className="relative border border-pink-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm h-full">
                    <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <div className="inline-block px-3 py-1 bg-pink-500/10 text-pink-500 text-xs rounded-full mb-2">
                      {item.period}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                    <p className="text-gray-400 mb-4">{item.school}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 个人特质 */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-purple-900/20" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 border border-pink-500 text-pink-500 text-xs font-mono rounded-full mb-4">
                我是谁
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                个人<span className="text-pink-500">特质</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                除了专业技能外，这些特质定义了我作为一个创作者和合作伙伴的核心价值。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "创新思维",
                  description: "不断探索新的创意方向和技术可能性，打破常规思维的束缚。",
                },
                {
                  title: "细节关注",
                  description: "对设计和技术实现的每一个细节都精益求精，追求完美的用户体验。",
                },
                {
                  title: "跨界融合",
                  description: "善于将不同领域的知识和技能融合，创造出独特的艺术表达。",
                },
                {
                  title: "持续学习",
                  description: "保持对新技术和设计趋势的好奇心，不断更新自己的知识库。",
                },
                {
                  title: "团队协作",
                  description: "擅长在多元化团队中工作，有效沟通并激发团队创造力。",
                },
                {
                  title: "问题解决",
                  description: "面对挑战时能够快速分析并提出创新解决方案，化难题为机遇。",
                },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-blue-500 opacity-30 blur-sm group-hover:opacity-100 transition-all duration-300 rounded-lg" />
                  <div className="relative border border-pink-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm h-full">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-pink-500 transition-colors">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 返回首页 */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            准备好探索我的<span className="text-pink-500">作品</span>了吗？
          </h2>
          <Link href="/#projects">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0">
              查看项目作品
            </Button>
          </Link>
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
