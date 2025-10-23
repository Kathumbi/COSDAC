"use client";

import EventsSection from "./EventsSection";
import GallerySection from "./GallerySection";

const CombinedPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Outer bordered wrapper */}
      <div className="border border-border/40 rounded-2xl shadow-md bg-white overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-start p-6">
          {/* Left side – Events */}
          <div className="w-full">
            <EventsSection />
          </div>

          {/* Right side – Gallery */}
          <div className="w-full">
            <GallerySection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedPage;
