"use client";

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ministries } from "@/data/ministries";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import GetInvolvedForm from "@/components/sections/GetInvolvedForm";

const MinistryDetail = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const ministry = ministries.find(
    (m) => m.name.toLowerCase() === decodeURIComponent(name || "").toLowerCase()
  );

  if (!ministry)
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-semibold mb-4">Ministry Not Found</h2>
        <Button onClick={() => navigate("/ministries")} variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Ministries
        </Button>
      </div>
    );

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container py-12 md:py-20 max-w-7xl mx-auto space-y-10"
      >
        {/* 🔙 Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-start"
        >
          <Button
            onClick={() => navigate("/ministries")}
            variant="outline"
            className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200 hover:scale-105 transform"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Ministries
          </Button>
        </motion.div>

        {/* 🖼️ Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[480px] rounded-2xl overflow-hidden shadow-lg"
        >
          {ministry.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="flex-1 overflow-hidden rounded-xl"
            >
              <img
                src={img}
                alt={`${ministry.name} image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%236b7280'%3EImage Not Found%3C/text%3E%3C/svg%3E";
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 🕊️ Ministry Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white p-6 md:p-10 rounded-2xl shadow-lg space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {ministry.name}
            </h1>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>

          {/* Blurb */}
          <p className="text-xl text-gray-700 font-medium leading-relaxed">
            {ministry.blurb}
          </p>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">About This Ministry</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {ministry.description}
            </p>
          </div>

          {/* Resources */}
          {ministry.resources?.length > 0 && (
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Resources & Links
              </h3>
              <div className="grid gap-3">
                {ministry.resources.map((resource, index) => (
                  <motion.a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-200 group"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                    <span className="text-primary font-medium group-hover:underline">
                      {resource.title}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-6 border-t border-gray-200"
          >
            <p className="text-gray-600 mb-4">
              Interested in joining the {ministry.name}?
            </p>
            <Button 
              onClick={() => setIsFormOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Get Involved Today
            </Button>
          </motion.div>
        </motion.div>
      </motion.main>

      {/* Get Involved Form Modal */}
      <GetInvolvedForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        ministryName={ministry.name}
      />
    </>
  );
};

export default MinistryDetail;