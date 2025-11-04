"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download, Calendar } from "lucide-react";
import { motion } from "framer-motion";

// List of bulletins
const bulletins = [
  {
    title: "Youth Sabbath Cosdac 11.10.2025",
    file: "/ImageUploads/bulletins/Bulletin.Youth Sabbath-Cosdac 11.10.2025.pdf",
    date: "October 11, 2025",
    type: "Youth Sabbath"
  },
  {
    title: "SOP & Church Heritage Sabbath Cosdac 18.10.2025",
    file: "/ImageUploads/bulletins/Bulletin.SOP & Church Heritage Sabbath-Cosdac 18.10.2025.pdf",
    date: "October 18, 2025",
    type: "Heritage Sabbath"
  },
];

const ChurchBulletins = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* 🌄 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-48 sm:h-56 md:h-64 lg:h-80 w-full overflow-hidden"
      >
        <img
          src="/ImageUploads/bulletin.jpg"
          alt="Church Bulletins Banner"
          className="w-full h-full object-cover brightness-75"
        />

        {/* ✅ Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => {
            if (window.history.state && window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/");
            }
          }}
          className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-1 sm:gap-2 bg-white/90 hover:bg-white text-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md transition-all duration-300 active:scale-95 text-xs sm:text-sm z-10"
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" /> 
          <span className="hidden xs:inline">Back</span>
        </motion.button>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg leading-tight">
            Church Bulletins
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-3 md:mt-4 drop-shadow-lg max-w-2xl leading-relaxed">
            Stay updated with our weekly bulletins and church announcements
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="container py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        {/* 📄 Bulletins Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {bulletins.map((bulletin, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
              whileHover={{ 
                scale: 1.02,
                y: -3,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group active:scale-[0.98]"
            >
              {/* Card Header with Icon */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6 border-b border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl flex-shrink-0">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="inline-block px-2 sm:px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-2">
                      {bulletin.type}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2 leading-tight">
                      {bulletin.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium truncate">{bulletin.date}</span>
                </div>

                {/* File Info */}
                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>PDF Document</span>
                </div>

                {/* Download Button */}
                <motion.a
                  href={bulletin.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-2.5 sm:py-3 px-4 rounded-lg sm:rounded-xl font-medium transition-all duration-200 group-hover:shadow-md text-sm sm:text-base"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  View Bulletin
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 📢 Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center bg-primary/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 mt-8 sm:mt-12"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Weekly Updates
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Our bulletins are updated weekly with the latest church announcements, 
              event schedules, and ministry updates. Check back every Sabbath for new content.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                onClick={() => navigate("/events")}
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary/10 text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
              >
                View Events
              </Button>
              <Button 
                onClick={() => navigate("/ministries")}
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary/10 text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
              >
                Explore Ministries
              </Button>
            </div>
          </div>
        </motion.div>

        {/* 📱 Empty State (if no bulletins) */}
        {bulletins.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center py-8 sm:py-12"
          >
            <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
              No Bulletins Available
            </h3>
            <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto px-4">
              Check back later for weekly church bulletins and announcements.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default ChurchBulletins;