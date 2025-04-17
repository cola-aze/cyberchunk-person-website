import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Monitor, Cpu, Zap, Code, Paintbrush, Layers, Glasses, Video } from "lucide-react"
import { notFound } from "next/navigation"

// 定义技能数据
const skillsData = {
  "ui-ux-design": {
    name: "UI/UX设计",
    icon: <Monitor className="h-10 w-10 text-pink-500" />,
    description: "创建直观、美观且功能强大的用户界面和体验，专注于赛博朋克风格的数字产品设计。",
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    projects: [
      { name: "未来城市导航应用", description: "为智能城市设计的沉浸式导航系统" },
      { name: "赛博咖啡馆品牌界面", description: "融合复古与未来的咖啡馆数字体验" },
      { name: "神经网络音乐播放器", description: "基于情绪分析的音乐播放界面" },
    ],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000",
  },
  "3d-modeling": {
    name: "3D建模",
    icon: <Cpu className="h-10 w-10 text-pink-500" />,
    description: "创建复杂的三维模型和环境，专注于未来主义和赛博朋克风格的数字资产。",
    tools: ["Blender", "Cinema 4D", "Maya", "ZBrush", "Substance Painter"],
    projects: [
      { name: "赛博朋克城市场景", description: "高细节的未来城市环境模型" },
      { name: "生化机械义肢系列", description: "具有高级功能的未来派假肢设计" },
      { name: "悬浮交通工具概念", description: "基于反重力技术的未来交通工具" },
    ],
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000",
  },
  "motion-design": {
    name: "动效设计",
    icon: <Zap className="h-10 w-10 text-pink-500" />,
    description: "创建流畅、引人入胜的动画和视觉效果，为静态设计注入生命力。",
    tools: ["After Effects", "Lottie", "Principle", "Framer Motion", "Cinema 4D"],
    projects: [
      { name: "神经网络可视化", description: "AI处理数据的抽象动态表现" },
      { name: "全息UI交互动效", description: "模拟全息投影界面的交互反馈" },
      { name: "数字身份动态标识", description: "随用户情绪和环境变化的个人标识动效" },
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000",
  },
  "frontend-dev": {
    name: "前端开发",
    icon: <Code className="h-10 w-10 text-pink-500" />,
    description: "构建响应式、高性能的网站和应用程序，专注于创新的用户界面和交互体验。",
    tools: ["React", "Next.js", "Three.js", "TailwindCSS", "GSAP"],
    projects: [
      { name: "沉浸式数字作品集", description: "基于WebGL的3D交互式作品展示" },
      { name: "神经网络可视化工具", description: "实时数据流的前端可视化界面" },
      { name: "赛博朋克游戏网站", description: "具有复杂动画和交互的游戏官网" },
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
  },
  "digital-illustration": {
    name: "数字插画",
    icon: <Paintbrush className="h-10 w-10 text-pink-500" />,
    description: "创作独特的数字艺术作品，融合赛博朋克、未来主义和科幻元素。",
    tools: ["Photoshop", "Procreate", "Illustrator", "Clip Studio Paint", "Krita"],
    projects: [
      { name: "霓虹都市系列", description: "探索未来城市夜生活的插画集" },
      { name: "生化进化概念图", description: "人机融合的视觉探索" },
      { name: "数字意识具象化", description: "AI意识的抽象视觉表达" },
    ],
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1000",
  },
  "brand-design": {
    name: "品牌设计",
    icon: <Layers className="h-10 w-10 text-pink-500" />,
    description: "为未来派品牌创建独特的视觉标识和整体品牌体验。",
    tools: ["Illustrator", "Photoshop", "InDesign", "Figma", "After Effects"],
    projects: [
      { name: "NeoTech科技品牌", description: "面向未来的科技公司整体品牌设计" },
      { name: "Pulse音乐节", description: "电子音乐节的视觉识别系统" },
      { name: "Synth合成饮料", description: "未来主义能量饮料的品牌包装" },
    ],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000",
  },
  "ar-vr": {
    name: "AR/VR",
    icon: <Glasses className="h-10 w-10 text-pink-500" />,
    description: "创建沉浸式的增强现实和虚拟现实体验，探索数字与现实的边界。",
    tools: ["Unity", "Unreal Engine", "ARKit", "VRChat SDK", "Blender"],
    projects: [
      { name: "城市记忆", description: "AR城市历史文化探索应用" },
      { name: "虚拟音乐工作室", description: "VR音乐创作与表演空间" },
      { name: "数字分身系统", description: "创建用户的AR/VR数字化身" },
    ],
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=1000",
  },
  "video-editing": {
    name: "视频剪辑",
    icon: <Video className="h-10 w-10 text-pink-500" />,
    description: "创作具有未来主义风格的视频内容，包括特效、调色和动态图形。",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Audition"],
    projects: [
      { name: "赛博朋克短片", description: "探索人机关系的实验性短片" },
      { name: "数字艺术纪录片", description: "关于数字艺术家的纪录片系列" },
      { name: "音乐可视化MV", description: "电子音乐的视觉化表现" },
    ],
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000",
  },
}

// 技能页面组件
export default function SkillPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const skill = skillsData[slug as keyof typeof skillsData]

  // 如果找不到对应的技能，返回404
  if (!skill) {
    notFound()
  }

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
          <Link href="/#skills">
            <Button variant="outline" size="sm" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> 返回技能列表
            </Button>
          </Link>
        </div>
      </header>

      {/* 技能详情 */}
      <div className="pt-24 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* 技能标题 */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
            <div className="w-20 h-20 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/30">
              {skill.icon}
            </div>
            <div>
              <div className="inline-block px-3 py-1 border border-pink-500 text-pink-500 text-xs font-mono rounded-full mb-2">
                专业技能
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{skill.name}</h1>
            </div>
          </div>

          {/* 技能内容 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                  技能概述
                </h2>
                <p className="text-gray-300 leading-relaxed">{skill.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                  专业工具
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 text-pink-400 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                  相关项目
                </h2>
                <div className="space-y-4">
                  {skill.projects.map((project, index) => (
                    <div
                      key={index}
                      className="p-4 border border-pink-500/30 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-pink-500/5 transition-colors"
                    >
                      <h3 className="font-bold text-lg text-pink-400 mb-1">{project.name}</h3>
                      <p className="text-gray-400 text-sm">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-blue-500 opacity-30 blur-xl rounded-lg" />
              <div className="relative border border-pink-500/30 rounded-lg overflow-hidden h-full">
                <div className="h-64 md:h-96 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${skill.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 to-purple-900/30 mix-blend-color-dodge"></div>
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute inset-0 bg-grid-white/10 bg-grid-8"></div>
                  <div className="absolute inset-0 glitch-overlay opacity-20"></div>
                </div>
                <div className="p-6 bg-black/70">
                  <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                    技能展示
                  </h3>
                  <p className="text-gray-400">
                    这些是我在{skill.name}
                    领域的一些代表性作品。每个项目都融合了赛博朋克美学与前沿技术，创造出独特的视觉体验。
                  </p>
                  <div className="mt-4">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0">
                      查看完整作品集
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 相关技能 */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">相关技能</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(skillsData)
                .filter(([key]) => key !== slug)
                .slice(0, 4)
                .map(([key, relatedSkill]) => (
                  <Link key={key} href={`/skills/${key}`} className="block">
                    <div className="relative group cursor-pointer">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-blue-500 opacity-30 blur-sm group-hover:opacity-100 transition-all duration-300 rounded-lg" />
                      <div className="relative border border-pink-500/30 rounded-lg overflow-hidden h-full p-4 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center text-center">
                        <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center mb-2">
                          {relatedSkill.icon}
                        </div>
                        <h3 className="font-bold text-sm group-hover:text-pink-500 transition-colors">
                          {relatedSkill.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* 返回按钮 */}
          <div className="mt-12 text-center">
            <Link href="/#skills">
              <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
                <ArrowLeft className="mr-2 h-4 w-4" /> 返回所有技能
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="py-6 border-t border-pink-500/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center items-center">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-pink-500" />
              <span className="font-bold text-lg tracking-wider">
                CYBER<span className="text-pink-500">PULSE</span>
              </span>
            </Link>
          </div>
          <div className="mt-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CYBERPULSE. 保留所有权利。
          </div>
        </div>
      </footer>
    </div>
  )
}
