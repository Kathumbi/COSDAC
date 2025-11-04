"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/ImageUploads/gallery/pic1.JPG",
  "/ImageUploads/gallery/pic2.JPG",
  "/ImageUploads/gallery/pic3.JPG",
  "/ImageUploads/gallery/pic4.JPG",
  "/ImageUploads/gallery/pic5.JPG",
];

const GallerySection = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="w-full border-t border-border/40 bg-muted/10 py-8 sm:py-12 md:py-16">
      <div className="container px-4 sm:px-6 text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Church Gallery
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          A glimpse into our moments of worship, service, and fellowship.
        </p>
      </div>

      {/* Gallery Container */}
      <div className="px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Large image container with responsive sizing */}
        <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-border/30 shadow-sm sm:shadow-md">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`Gallery ${index + 1}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
          </AnimatePresence>

          {/* Prev / Next Buttons - Responsive sizing and positioning */}
          <button
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/45 text-white p-2 sm:p-3 rounded-full shadow transition-all duration-200 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            aria-label="Next image"
            onClick={next}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/45 text-white p-2 sm:p-3 rounded-full shadow transition-all duration-200 active:scale-95"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots - Responsive positioning and sizing */}
          <div className="absolute left-0 right-0 bottom-3 sm:bottom-4 flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto inline-flex gap-1.5 sm:gap-2 bg-black/25 backdrop-blur rounded-full px-2 sm:px-3 py-1 sm:py-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`transition-all duration-200 ${
                    i === index 
                      ? "bg-primary scale-105" 
                      : "bg-white/60 hover:bg-white/80"
                  } ${
                    isMobile ? "w-2 h-2" : "w-2.5 h-2.5 sm:w-3 sm:h-3"
                  } rounded-full`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Strip for Larger Screens */}
        <div className="hidden md:flex justify-center gap-3 mt-4 sm:mt-6">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-300 ${
                i === index 
                  ? "ring-2 ring-primary scale-105" 
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              } rounded-lg overflow-hidden`}
            >
              <img
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
              />
            </button>
          ))}
        </div>

        {/* Mobile Image Counter */}
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-muted-foreground">
            {index + 1} / {images.length}
          </p>
        </div>

        {/* Touch Swipe Hint for Mobile */}
        <div className="md:hidden text-center mt-2">
          <p className="text-xs text-muted-foreground">
            Swipe or use arrows to navigate
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;