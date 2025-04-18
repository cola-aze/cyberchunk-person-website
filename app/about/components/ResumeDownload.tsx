'use client'

import { Download } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

export function DownloadResumeButton() {
    return (
        <Button
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0"
            onClick={() => {
                // 触发下载
                const link = document.createElement('a')
                link.href = '/resume.pdf'
                link.download = '可乐阿泽_简历.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)

                // 显示Toast通知
                toast({
                    title: "简历下载中",
                    description: "您的简历正在下载，请稍候...",
                    variant: "default",
                })
            }}
        >
            <Download className="mr-2 h-4 w-4" /> 下载简历
        </Button>
    )
}