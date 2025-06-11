import Image from "next/image"

export default function AppPreview() {
  return (
    <div className="relative w-[280px] h-[560px] rounded-[40px] border-8 border-gray-900 overflow-hidden shadow-xl">
      <div className="absolute top-0 w-full h-6 bg-gray-900 z-10"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-gray-900 rounded-b-xl z-20"></div>
      <div className="w-full h-full bg-white overflow-hidden">
        <Image
          src="/images/app-screenshot-1.png"
          alt="Sapients App Screenshot"
          width={264}
          height={544}
          className="object-cover"
        />
      </div>
    </div>
  )
}
