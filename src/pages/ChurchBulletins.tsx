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
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-64 md:h-80 w-full overflow-hidden"
      >
        <img
          src="/ImageUploads/bulletin.jpg"
          alt="Church Bulletins Banner"
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
            Church Bulletins
          </h1>
          <p className="text-lg md:text-xl mt-4 drop-shadow-lg max-w-2xl px-4">
            Stay updated with our weekly bulletins and church announcements
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="container py-12 md:py-20 max-w-7xl mx-auto space-y-10">
        {/* 📄 Bulletins Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {bulletins.map((bulletin, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Card Header with Icon */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-2">
                      {bulletin.type}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {bulletin.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{bulletin.date}</span>
                </div>

                {/* File Info */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FileText className="w-4 h-4" />
                  <span>PDF Document</span>
                </div>

                {/* Download Button */}
                <motion.a
                  href={bulletin.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 group-hover:shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  View Bulletin
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 📢 Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center bg-primary/5 rounded-2xl p-8 mt-12"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Weekly Updates
            </h3>
            <p className="text-gray-600 mb-6">
              Our bulletins are updated weekly with the latest church announcements, 
              event schedules, and ministry updates. Check back every Sabbath for new content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/events")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                View Events
              </Button>
              <Button 
                onClick={() => navigate("/ministries")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Explore Ministries
              </Button>
            </div>
          </div>
        </motion.div>

        {/* 📱 Empty State (if no bulletins) */}
        {bulletins.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center py-12"
          >
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No Bulletins Available
            </h3>
            <p className="text-gray-500">
              Check back later for weekly church bulletins and announcements.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default ChurchBulletins;