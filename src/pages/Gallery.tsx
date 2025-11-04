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

const Gallery = () => {
  const [index, setIndex] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-display"
          >
            Church Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            A glimpse into our moments of worship, service, and fellowship
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <section className="container py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Gallery Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-2xl bg-white"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`Gallery image ${index + 1}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            aria-label="Next image"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute left-0 right-0 bottom-6 flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto inline-flex gap-3 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === index 
                      ? "bg-white scale-125 shadow-lg" 
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {index + 1} / {images.length}
          </div>
        </motion.div>

        {/* Gallery Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-12 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Moments That Matter
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Browse through our collection of cherished moments from worship services, 
            community outreach, fellowship events, and special celebrations that capture 
            the spirit of our church family.
          </p>
        </motion.div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
        >
          {images.map((image, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                i === index 
                  ? "border-primary shadow-lg" 
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
              {i === index && (
                <div className="absolute inset-0 bg-primary/20" />
              )}
            </motion.button>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Gallery;