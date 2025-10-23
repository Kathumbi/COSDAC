"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const images = [
  "/ImageUploads/gallery/pic1.JPG",
  "/ImageUploads/gallery/pic2.JPG",
  "/ImageUploads/gallery/pic3.JPG",
  "/ImageUploads/gallery/pic4.JPG",
  "/ImageUploads/gallery/pic5.JPG",
];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-gray-50 relative">
      {/* 🌄 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-64 md:h-80 w-full overflow-hidden"
      >
        <img
          src="/ImageUploads/gallery.jpg"
          alt="Church Gallery Banner"
          className="w-full h-full object-cover brightness-75"
        />

        {/* ✅ Back Button */}
        <button
          onClick={() => {
            if (window.history.state && window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/");
            }
          }}
          className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-105 z-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Church Gallery
          </h1>
          <p className="text-lg md:text-xl mt-4 drop-shadow-lg max-w-2xl px-4">
            A glimpse into our moments of worship, service, and fellowship
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <section className="container py-12 md:py-20 max-w-7xl mx-auto">
        {/* Gallery Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`Gallery image ${index + 1}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="w-full h-[400px] md:h-[520px] lg:h-[600px] object-cover"
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button
            aria-label="Next image"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
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
          transition={{ delay: 0.5, duration: 0.6 }}
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
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
        >
          {images.map((image, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
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
            </button>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Gallery;