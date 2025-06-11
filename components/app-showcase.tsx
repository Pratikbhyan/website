"use client"

import Image from "next/image"
import { useState } from "react"

const screenshots = [
  {
    src: "/images/app-screenshot-3.jpg",
    alt: "Daily episodes",
    title: "Get smarter Everyday",
  },
  {
    src: "/images/app-screenshot-1.png",
    alt: "Audio player with Text synchronization",
    title: "Deep Audio Content",
  },
  {
    src: "/images/app-screenshot-2.png",
    alt: "Library view",
    title: "Rich Content Library",
  },
  {
    src: "/images/app-screenshot-4.jpg",
    alt: "Beautiful themes",
    title: "Engaging episodes",
  },
]

export default function AppShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience Sapients</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See how philosophy comes alive through beautiful design and thoughtful content
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="relative">
              <div className="relative w-[280px] h-[560px] rounded-[40px] border-8 border-gray-900 overflow-hidden shadow-2xl">
                <div className="absolute top-0 w-full h-6 bg-gray-900 z-10"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-gray-900 rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-white overflow-hidden">
                  <Image
                    src={screenshots[currentIndex].src || "/placeholder.svg"}
                    alt={screenshots[currentIndex].alt}
                    width={264}
                    height={544}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 max-w-md">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`p-4 rounded-lg text-left transition-all ${
                    currentIndex === index
                      ? "bg-sky-100 border-2 border-sky-300"
                      : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                  }`}
                >
                  <h3 className="font-semibold text-lg">{screenshot.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{screenshot.alt}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
