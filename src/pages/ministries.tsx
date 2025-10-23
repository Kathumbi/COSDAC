"use client";

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ministries } from "@/data/ministries";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import GetInvolvedForm from "@/components/sections/GetInvolvedForm";

const Ministries = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedMinistry, setSelectedMinistry] = useState("");

  const handleGetInvolved = (ministryName?: string) => {
    setSelectedMinistry(ministryName || "");
    setIsFormOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 relative">
        {/* 🌄 Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-64 md:h-80 w-full overflow-hidden"
        >
          <img
            src="/ImageUploads/ministry.jpg"
            alt="Church Ministries Banner"
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
              Church Ministries
            </h1>
            <p className="text-lg md:text-xl mt-4 drop-shadow-lg max-w-2xl px-4">
              Discover opportunities to grow, serve, and connect with our various ministry groups
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <main className="container py-12 md:py-20 max-w-7xl mx-auto space-y-10">
          {/* 🧩 Ministries Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
          >
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <Link 
                  to={`/ministries/${encodeURIComponent(ministry.name)}`}
                  className="block h-full"
                >
                  <div className="aspect-w-16 aspect-h-12 h-48 overflow-hidden">
                    <img
                      src={ministry.images[0]}
                      alt={ministry.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%236b7280'%3EImage Loading%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h2 className="text-xl font-semibold text-gray-800 hover:text-primary transition-colors">
                      {ministry.name}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {ministry.blurb}
                    </p>
                    <div className="pt-2">
                      <span className="text-primary text-sm font-medium hover:underline cursor-pointer">
                        Learn more →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* 📞 Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center bg-primary/5 rounded-2xl p-8 mt-12"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Interested in Joining a Ministry?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We'd love to help you find the perfect ministry to serve and grow in. Contact us to learn more about getting involved.
            </p>
            <Button 
              onClick={() => handleGetInvolved()}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Get Involved
            </Button>
          </motion.div>
        </main>

        {/* Get Involved Form Modal */}
        <GetInvolvedForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          ministryName={selectedMinistry}
        />
      </div>
    </>
  );
};

export default Ministries;