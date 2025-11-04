// src/components/Detailedsections/MinistryDetailsSection.tsx
import React from "react";
import { Ministry } from "@/data/ministries";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  ministry: Ministry;
}

const MinistryDetailsSection: React.FC<Props> = ({ ministry }) => {
  const navigate = useNavigate();

  return (
    <section className="container py-8 sm:py-12 md:py-16 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6 sm:mb-8"
      >
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-full bg-white hover:bg-gray-50 text-gray-700 border-gray-200 transition-all duration-200 active:scale-95 text-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Ministries
        </Button>
      </motion.div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          {ministry.name} Ministry
        </h1>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
      </motion.div>

      {/* Ministry Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 sm:mb-12"
      >
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            About This Ministry
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            {ministry.description}
          </p>
        </div>
      </motion.div>

      {/* Ministry Images Grid */}
      {ministry.images && ministry.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
            Ministry Gallery
          </h2>
          <div className={`grid gap-4 sm:gap-6 ${
            ministry.images.length === 1 
              ? 'grid-cols-1 max-w-2xl mx-auto' 
              : ministry.images.length === 2 
                ? 'grid-cols-1 sm:grid-cols-2' 
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {ministry.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`${ministry.name} ministry image ${index + 1}`}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%236b7280'%3EImage Loading%3C/text%3E%3C/svg%3E";
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Additional Ministry Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
          Get Involved
        </h2>
        <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto leading-relaxed">
          Interested in joining the {ministry.name} ministry? We'd love to have you be part of our team and serve together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2.5 text-sm sm:text-base"
            onClick={() => navigate('/get-involved')}
          >
            Join This Ministry
          </Button>
          <Button 
            variant="outline"
            className="px-6 sm:px-8 py-2.5 text-sm sm:text-base"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default MinistryDetailsSection;