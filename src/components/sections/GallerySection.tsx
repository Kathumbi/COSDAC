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
    <section id="gallery" className="w-full border-t border-border/40 bg-muted/10 py-12 md:py-16">
      <div className="container text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Church Gallery
        </h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">
          A glimpse into our moments of worship, service, and fellowship.
        </p>
      </div>

      {/* Large image container (keeps frame large) */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl border border-border/30 shadow-md">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Gallery ${index + 1}`}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full h-[520px] md:h-[600px] lg:h-[640px] object-cover"
          />
        </AnimatePresence>

        {/* Prev / Next - inside edges */}
        <button
          aria-label="Previous image"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/45 text-white p-3 rounded-full shadow transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          aria-label="Next image"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/45 text-white p-3 rounded-full shadow transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots INSIDE image at bottom center */}
        <div className="absolute left-0 right-0 bottom-4 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto inline-flex gap-2 bg-black/25 backdrop-blur rounded-full px-3 py-1">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-primary scale-105" : "bg-white/60"
                }`}
                // keep them keyboard focusable
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
