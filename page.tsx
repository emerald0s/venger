"use client"

import Image from "next/image"
import { useState } from "react"

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const images = [
    { src: "pics/GetImage.jpg", alt: "Portrait photo" },
    { src: "pics/90089185_136133974609628_2531136854858509099_n.jpg", alt: "Travel photo with mask" },
    { src: "pics/89477420_498120114432834_6004819497717677126_n.jpg", alt: "Outdoor photo in field" },
    { src: "pics/89385354_204197647483331_4226804155895057781_n.jpg", alt: "Barcelona viewpoint photo" },
    { src: "pics/90031306_506891396668004_6301638787155542718_n.jpg", alt: "Hiking photo with cap" },
    { src: "pics/IMG-20241230-WA0004.jpg", alt: "Image 6" },
    { src: "pics/IMG-20250126-WA0006.jpg", alt: "Image 7" },
    { src: "pics/STK-20250127-WA0008.jpg", alt: "Image 8" },
    { src: "pics/STK-20250220-WA0008.jpg", alt: "Image 9" },
  ]

  const closeModal = () => setSelectedImageIndex(null)

  const navigateImage = (direction: number) => {
    if (selectedImageIndex !== null) {
      const newIndex = (selectedImageIndex + direction + images.length) % images.length
      setSelectedImageIndex(newIndex)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
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
              שלום, שמי אסף ונגר, ואני חבר וחניך גאה בארגון הטרור "כנפיים של קרמבו". יש האומרים אפילו שזה ארגון הטרור האהוב עלי. בנוסף לזה אני נאו נאצי🙋‍♂️🇩🇪🐐👑.
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
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    onLoadingComplete={(img) => img.classList.add("opacity-100")}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 z-10"
              onClick={closeModal}
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

            {/* Previous Button */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
              onClick={() => navigateImage(-1)}
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
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
              onClick={() => navigateImage(1)}
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
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative h-full">
              <Image
                src={images[selectedImageIndex].src || "/placeholder.svg"}
                alt={images[selectedImageIndex].alt}
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
