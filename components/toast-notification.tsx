"use client"

import { useEffect, useState } from "react"
import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ToastNotificationProps {
  message: string
  type?: "success" | "error" | "info"
  duration?: number
  onClose: () => void
}

export function ToastNotification({ message, type = "success", duration = 3000, onClose }: ToastNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  }[type]

  const icon = {
    success: <CheckCircle className="h-5 w-5" />,
    error: <X className="h-5 w-5" />,
    info: <CheckCircle className="h-5 w-5" />,
  }[type]

  return (
    <div
      className={`fixed top-4 right-4 z-50 flex items-center space-x-3 px-4 py-3 rounded-lg text-white shadow-lg transition-all duration-300 ${bgColor} ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {icon}
      <span className="font-medium">{message}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 text-white hover:bg-white/20"
        onClick={() => {
          setIsVisible(false)
          setTimeout(onClose, 300)
        }}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}
