"use client";

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ministries } from "@/data/ministries";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import GetInvolvedForm from "@/components/sections/GetInvolvedForm";
import { Badge } from "@/components/ui/badge";

const Ministries = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedMinistry, setSelectedMinistry] = useState("");

  const handleGetInvolved = (ministryName?: string) => {
    setSelectedMinistry(ministryName || "");
    setIsFormOpen(true);
  };

  const featuredMinistries = ministries.filter(ministry => ministry.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-display"
            >
              Church Ministries
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            >
              Discover opportunities to grow, serve, and connect with our various ministry groups
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Featured Ministries */}
        {featuredMinistries.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
              Featured Ministries
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto"
            >
              {featuredMinistries.map((ministry) => (
                <motion.div
                  key={ministry.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to={`/ministries/${encodeURIComponent(ministry.name)}`}
                    className="block h-full"
                  >
                    <div className="bg-gradient-to-br from-white to-blue-50/50 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-xl sm:rounded-2xl overflow-hidden h-full">
                      <div className="aspect-w-16 aspect-h-12 h-40 sm:h-48 overflow-hidden">
                        <img
                          src={ministry.images[0]}
                          alt={ministry.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%236b7280'%3EImage Loading%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                      <div className="p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-primary text-white px-2 sm:px-3 py-1 text-xs sm:text-sm">
                            Featured
                          </Badge>
                          <Badge variant="outline" className="capitalize text-xs sm:text-sm">
                            {ministry.category}
                          </Badge>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 sm:mb-3 line-clamp-2">
                          {ministry.name}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                          {ministry.blurb}
                        </p>
                        <span className="text-primary font-medium hover:underline cursor-pointer inline-flex items-center gap-1 text-sm sm:text-base">
                          Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* All Ministries */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
            All Ministries
          </h2>

          <motion.div
            key="ministries-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
          >
            {ministries.map((ministry) => (
              <motion.div
                key={ministry.name}
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to={`/ministries/${encodeURIComponent(ministry.name)}`}
                  className="block h-full"
                >
                  <div className="bg-white border-2 border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group rounded-lg sm:rounded-xl overflow-hidden h-full">
                    <div className="aspect-w-16 aspect-h-12 h-32 sm:h-36 overflow-hidden">
                      <img
                        src={ministry.images[0]}
                        alt={ministry.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%236b7280'%3EImage Loading%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="capitalize text-xs">
                          {ministry.category}
                        </Badge>
                        {ministry.featured && (
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 px-2 py-1 text-xs">
                            ★ Featured
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {ministry.name}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2 sm:mb-3">
                        {ministry.blurb}
                      </p>
                      <span className="text-primary text-xs sm:text-sm font-medium hover:underline cursor-pointer inline-flex items-center gap-1">
                        Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Get Involved?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto">
              Join one of our ministries and become part of our growing community. 
              We have opportunities for everyone to serve and grow.
            </p>
            <Button 
              onClick={() => handleGetInvolved()}
              className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg w-full sm:w-auto"
              size="lg"
            >
              Get Involved Today
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Get Involved Form Modal */}
      <GetInvolvedForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        ministryName={selectedMinistry}
      />
    </div>
  );
};

export default Ministries;