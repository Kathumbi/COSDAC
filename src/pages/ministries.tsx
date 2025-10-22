import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { ministries } from "@/data/ministries";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Ministries = () => {
  const navigate = useNavigate();

  return (
    <main className="container py-12 md:py-20 max-w-7xl mx-auto space-y-10">
      {/* 🔙 Back to Main Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-start"
      >
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-200 hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Main
        </Button>
      </motion.div>

      {/* 💒 Ministries Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 text-center"
      >
        Church Ministries
      </motion.h1>

      {/* 🧩 Ministries Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {ministries.map((ministry, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <Link to={`/ministries/${ministry.name.toLowerCase()}`}>
              <img
                src={ministry.image}
                alt={ministry.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  {ministry.name}
                </h2>
                <p className="text-gray-600 text-sm">{ministry.blurb}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Ministries;
