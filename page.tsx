"use client"

import Image from "next/image"
import { useState } from "react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%283%29-a1sOk8NzRcqHFWzNCRkdyV7bYq0dzz.jpeg",
      alt: "Portrait photo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/89477420_498120114432834_6004819497717677126_n.jpg-5hLndc0yQu8XgdCDfQ7geePmUEbD5G.jpeg",
      alt: "Travel photo with mask",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90031306_506891396668004_6301638787155542718_n.jpg-BZUtYWL6UpGmPwD141JxjMcwP20Ozp.jpeg",
      alt: "Outdoor photo in field",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/89385354_204197647483331_4226804155895057781_n.jpg-a38jeImbeR7J2LQ5kqnUJQ35aZsJLB.jpeg",
      alt: "Barcelona viewpoint photo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90089185_136133974609628_2531136854858509099_n.jpg-wqnjVxTZBuMmMI1t3x0vwIELS3vYGa.jpeg",
      alt: "Hiking photo with cap",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Asaf Venger&apos;s Digital Footprint</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* About Me Section */}
        <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 text-center" dir="rtl">
              כאן יהיה התוכן שלך בעברית
            </p>
          </div>
        </section>

        {/* Image Gallery */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="relative h-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

