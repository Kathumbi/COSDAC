"use client";

import EventsSection from "./EventsSection";
import GallerySection from "./GallerySection";

const CombinedPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="border border-border/40 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md bg-card/50 backdrop-blur-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-8">
            
            {/* Events Section */}
            <div className="w-full">
              <div className="sticky top-6">
                <EventsSection />
              </div>
            </div>

            {/* Gallery Section */}
            <div className="w-full">
              <div className="sticky top-6">
                <GallerySection />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedPage;