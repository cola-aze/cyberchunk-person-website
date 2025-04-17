import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Zap } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* 导航栏 */}
      <header className="fixed w-full z-50 backdrop-blur-md bg-black/50 border-b border-pink-500/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-pink-500" />
            <span className="font-bold text-xl tracking-wider">
              CYBER<span className="text-pink-500">PULSE</span>
            </span>
          </Link>
        </div>
      </header>

      {/* 404内容 */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="glitch-text text-9xl font-bold mb-6">404</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            技能未找到
          </h1>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            您尝试访问的技能页面不存在。请返回技能列表查看所有可用技能。
          </p>
          <Link href="/#skills">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> 返回技能列表
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
