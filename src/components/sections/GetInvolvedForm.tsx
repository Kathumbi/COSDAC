"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Send, User, Mail, Phone, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GetInvolvedFormProps {
  isOpen: boolean;
  onClose: () => void;
  ministryName?: string;
}

const GetInvolvedForm: React.FC<GetInvolvedFormProps> = ({ isOpen, onClose, ministryName }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ministry: ministryName || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, ministry: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect to backend API
    console.log("Form submitted:", formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your interest! We'll contact you soon.");
      onClose();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        ministry: ministryName || "",
      });
    }, 1500);
  };

  const formFields = [
    {
      id: "firstName",
      label: "First Name *",
      type: "text",
      icon: User,
      placeholder: "Enter your first name",
      required: true,
      colSpan: "md:col-span-1"
    },
    {
      id: "lastName",
      label: "Last Name *",
      type: "text",
      icon: User,
      placeholder: "Enter your last name",
      required: true,
      colSpan: "md:col-span-1"
    },
    {
      id: "email",
      label: "Email Address *",
      type: "email",
      icon: Mail,
      placeholder: "your.email@example.com",
      required: true,
      colSpan: "md:col-span-1"
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      icon: Phone,
      placeholder: "+254 700 000 000",
      required: true,
      colSpan: "md:col-span-1"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                duration: 0.5
              }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-primary/5 to-primary/10"
              >
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-gray-900">Get Involved</h2>
                  <p className="text-gray-600 text-sm">
                    Join our ministry and make a difference
                  </p>
                </div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="rounded-full hover:bg-white/50"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {formFields.map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={field.colSpan}
                    >
                      <Label htmlFor={field.id} className="text-sm font-medium text-gray-700 mb-2 block">
                        {field.label}
                      </Label>
                      <div className="relative">
                        <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="pl-10 pr-4 py-2.5 border-gray-300 focus:border-primary focus:ring-primary transition-all duration-200"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Ministry Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <Label htmlFor="ministry" className="text-sm font-medium text-gray-700">
                    Ministry Interest *
                  </Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                    <Select value={formData.ministry} onValueChange={handleSelectChange}>
                      <SelectTrigger className="pl-10 pr-4 py-2.5 border-gray-300 focus:border-primary focus:ring-primary transition-all duration-200">
                        <SelectValue placeholder="Select a ministry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Children's Ministry">Children's Ministry</SelectItem>
                        <SelectItem value="Young Adults Ministry">Young Adults Ministry</SelectItem>
                        <SelectItem value="Women's Ministry">Women's Ministry</SelectItem>
                        <SelectItem value="Men's Ministry">Men's Ministry</SelectItem>
                        <SelectItem value="Other">Other Ministry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>

                {/* Submit Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-3 pt-4"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="w-full border-gray-300 hover:bg-gray-50 transition-all duration-200"
                    >
                      Cancel
                    </Button>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                          Submitting...
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="flex items-center gap-2"
                          whileHover={{ x: 2 }}
                        >
                          <Send className="w-4 h-4" />
                          Submit Interest
                        </motion.div>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="bg-gray-50 px-6 py-4 border-t border-gray-200"
              >
                <p className="text-xs text-gray-500 text-center">
                  We'll contact you to welcome you to the ministry.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GetInvolvedForm;