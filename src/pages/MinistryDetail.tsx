"use client";

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ministries } from "@/data/ministries";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Users, Calendar, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GetInvolvedForm from "@/components/sections/GetInvolvedForm";
import { Badge } from "@/components/ui/badge";

const MinistryDetail = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const ministry = ministries.find(
    (m) => m.name.toLowerCase() === decodeURIComponent(name || "").toLowerCase()
  );

  const handleBackClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("/ministries");
    }, 400);
  };

  const handleGetInvolvedClick = () => {
    setIsFormOpen(true);
  };

  if (!ministry)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Ministry Not Found</h2>
        <Button onClick={() => navigate("/ministries")} variant="outline" size="sm" className="text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Ministries
        </Button>
      </div>
    );

  return (
    <AnimatePresence mode="wait">
      {!isExiting && (
        <motion.div
          key="ministry-detail"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ 
            duration: 0.4,
            ease: "easeInOut"
          }}
          className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30"
        >
          {/* Header - Combined Title and Description */}
          <motion.section
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white min-h-[60vh] flex items-center justify-center"
          >
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
              {/* Back Button - Floating */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 left-4 sm:left-6 z-10"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    x: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleBackClick}
                    variant="ghost"
                    size="sm"
                    className="group bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-300"
                  >
                    <motion.div
                      animate={{ x: [0, -2, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                    </motion.div>
                    Back
                  </Button>
                </motion.div>
              </motion.div>

              <div className="text-center max-w-4xl mx-auto">
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 sm:mb-8"
                >
                  <Badge className="bg-white/20 text-white border-none px-4 py-2 text-sm sm:text-base">
                    {ministry.category} Ministry
                  </Badge>
                </motion.div>

                {/* Combined Title and Description */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display"
                >
                  {ministry.name}
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-16 h-1 bg-white/80 rounded-full mx-auto mb-6 sm:mb-8"></div>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed sm:leading-loose">
                    {ministry.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Image Gallery Section */}
          {ministry.images && ministry.images.length > 0 && (
            <section className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20">
              <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-12 sm:mb-16"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Ministry Gallery
                  </h2>
                  <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
                    See our ministry in action through these moments of service and fellowship
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`grid gap-4 sm:gap-6 md:gap-8 ${
                    ministry.images.length === 1 
                      ? 'grid-cols-1 max-w-4xl mx-auto' 
                      : ministry.images.length === 2 
                        ? 'grid-cols-1 lg:grid-cols-2' 
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {ministry.images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <img
                        src={img}
                        alt={`${ministry.name} ministry image ${index + 1}`}
                        className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%236b7280'%3EImage Not Found%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          )}

          {/* Resources Section - Full Page */}
          {ministry.resources?.length > 0 && (
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100/50 py-12 sm:py-16 md:py-20">
              <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-12 sm:mb-16"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Resources & Links
                  </h2>
                  <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
                    Explore these valuable resources to deepen your understanding and involvement
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-6xl mx-auto"
                >
                  <div className="grid gap-6 sm:gap-8">
                    {ministry.resources.map((resource, index) => (
                      <motion.a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className="flex-shrink-0">
                          <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2">
                            {resource.title}
                          </h3>
                          <p className="text-gray-600 text-sm sm:text-base">
                            {resource.description || "Click to access this valuable resource"}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeInOut"
                            }}
                          >
                            <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          </motion.div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Call to Action Section - Full Page */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-blue-50/30 to-primary/10 py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Ready to Get Involved?
                </h2>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8 sm:mb-12"
                >
                  <p className="text-gray-600 text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
                    Join the <span className="font-semibold text-primary">{ministry.name}</span> ministry and become part of our mission to serve and grow together in faith.
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
                      <p className="text-gray-600 text-sm">Join a supportive community of believers</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
                      <p className="text-gray-600 text-sm">Serve according to your availability</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-center"
                    >
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HeartHandshake className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Make a Difference</h3>
                      <p className="text-gray-600 text-sm">Impact lives through meaningful service</p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={handleGetInvolvedClick}
                      className="bg-primary hover:bg-primary/90 text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      Get Involved Today
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline"
                      onClick={handleBackClick}
                      className="px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-full border-2 group"
                      size="lg"
                    >
                      <motion.div
                        animate={{ x: [0, -3, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                      </motion.div>
                      Back to Ministries
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-gray-500 text-sm sm:text-base mt-6 sm:mt-8"
                >
                  We'll contact you within 24 hours to discuss how you can get involved
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Get Involved Form Modal */}
          <GetInvolvedForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            ministryName={ministry.name}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MinistryDetail;