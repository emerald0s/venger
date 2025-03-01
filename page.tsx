"use client"

import Image from "next/image"
import { useState } from "react"

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const images = [
    { src: "pics/Untitled1.jpg", alt: "Abstract image" },
    { src: "pics/Untitled.jpg", alt: "Abstract image" },
    { src: "pics/STK-20240623-WA0041_1.jpg", alt: "Scenic view" },
    { src: "pics/STK-20240920-WA0010_1.jpg", alt: "Mountain landscape" },
    { src: "pics/WhatsApp_Bild_2025-03-01_um_22.21.32_d06e5b31.jpg", alt: "Evening sunset" },
    { src: "pics/WhatsApp_Bild_2025-03-01_um_22.20.00_d1942d33.jpg", alt: "City skyline" },
    { src: "pics/WhatsApp_Bild_2025-03-01_um_22.19.59_f6106c95.jpg", alt: "Close-up of a flower" },
    { src: "pics/WhatsApp_Bild_2025-03-01_um_22.19.59_da091138.jpg", alt: "Nature scene" },
    { src: "pics/WhatsApp_Bild_2025-03-01_um_22.19.59_7907173d.jpg", alt: "Ocean waves" },
    { src: "pics/WhatsApp_Bild_2025-03-01_um_22.19.59_034b0281.jpg", alt: "Sunrise over hills" },
    { src: "pics/WhatsApp_Bild_2025-03-01_um_22.19.59_8c6f1e23.jpg", alt: "Forest trail" },
    { src: "pics/Screenshot_2024-12-26_225023.png", alt: "Digital art" },
    { src: "pics/Screenshot_2024-11-09_021052.png", alt: "Tech interface" },
    { src: "pics/Screenshot_2024-11-09_021048.png", alt: "Gaming setup" },
    { src: "pics/Screenshot_2024-11-09_021033.png", alt: "Coding environment" },
    { src: "pics/Screenshot_2024-10-04_030325.png", alt: "Dashboard view" },
    { src: "pics/Screenshot_2024-06-21_020014.png", alt: "App design" },
    { src: "pics/Screenshot_2024-06-14_160123.png", alt: "User interface mockup" },
    { src: "pics/ing.png", alt: "Placeholder image" },
    { src: "pics/IMG_9884.jpg", alt: "Portrait photo" },
    { src: "pics/IMG_9872.jpg", alt: "Outdoor adventure" },
    { src: "pics/IMG_9849.jpg", alt: "Travel moment" },
    { src: "pics/IMG_9095.jpg", alt: "Cultural event" },
    { src: "pics/IMG_8429.jpg", alt: "Historical site" },
    { src: "pics/IMG_8006.jpg", alt: "Urban exploration" },
    { src: "pics/IMG_8004.jpg", alt: "Street photography" },
    { src: "pics/IMG_8003.jpg", alt: "Architectural detail" },
    { src: "pics/IMG_7998.jpg", alt: "Night cityscape" },
    { src: "pics/IMG_6935.jpg", alt: "Nature walk" },
    { src: "pics/IMG_0423.jpg", alt: "Family gathering" },
    { src: "pics/IMG_0422.jpg", alt: "Celebration moment" },
    { src: "pics/IMG_0421.jpg", alt: "Group photo" },
    { src: "pics/IMG_0420.jpg", alt: "Friends reunion" },
    { src: "pics/IMG_0136.jpg", alt: "Casual portrait" },
    { src: "pics/img.png", alt: "Generic placeholder" },
    { src: "pics/image.jpg", alt: "Default image" },
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
          </div
