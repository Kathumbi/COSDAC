import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ministries } from "@/data/ministries";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion"; // ✨ animation library

const MinistryDetail = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const ministry = ministries.find(
    (m) => m.name.toLowerCase() === name?.toLowerCase()
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
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
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

      {/* 🖼️ Animated Image Row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[480px] rounded-2xl overflow-hidden shadow-lg"
      >
        {[ministry.image, ministry.image, ministry.image].map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex-1 overflow-hidden rounded-xl"
          >
            <img
              src={img}
              alt={`${ministry.name} ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 🕊️ Ministry Info */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="bg-white p-6 md:p-10 rounded-2xl shadow-lg space-y-6"
      >
        <h1 className="text-4xl font-bold text-gray-900">
          {ministry.name} Ministry
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          {ministry.description}
        </p>
      </motion.div>
    </motion.main>
  );
};

export default MinistryDetail;
