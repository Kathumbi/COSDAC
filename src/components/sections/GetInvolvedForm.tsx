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
    },
    {
      id: "lastName",
      label: "Last Name *",
      type: "text",
      icon: User,
      placeholder: "Enter your last name",
      required: true,
    },
    {
      id: "email",
      label: "Email Address *",
      type: "email",
      icon: Mail,
      placeholder: "your.email@example.com",
      required: true,
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      icon: Phone,
      placeholder: "+254 700 000 000",
      required: true,
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
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                duration: 0.3
              }}
              className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-md max-h-[95vh] overflow-y-auto border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header - Sticky on mobile */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-primary/5 to-primary/10 sticky top-0 bg-white z-10"
              >
                <div className="space-y-1 flex-1 min-w-0">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 truncate">Get Involved</h2>
                  <p className="text-gray-600 text-xs md:text-sm truncate">
                    Join our ministry and make a difference
                  </p>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}
                  className="flex-shrink-0 ml-2"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="rounded-full h-8 w-8 md:h-10 md:w-10 hover:bg-white/50"
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 md:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 gap-3 md:gap-4"
                >
                  {formFields.map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Label 
                        htmlFor={field.id} 
                        className="text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2 block"
                      >
                        {field.label}
                      </Label>
                      <div className="relative">
                        <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                        <Input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="pl-9 md:pl-10 pr-3 md:pr-4 py-2.5 md:py-2.5 text-sm md:text-base border-gray-300 focus:border-primary focus:ring-primary transition-all duration-200 h-11 md:h-12"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Ministry Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-1 md:space-y-2"
                >
                  <Label htmlFor="ministry" className="text-xs md:text-sm font-medium text-gray-700">
                    Ministry Interest *
                  </Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 text-gray-400 z-10" />
                    <Select value={formData.ministry} onValueChange={handleSelectChange}>
                      <SelectTrigger className="pl-9 md:pl-10 pr-3 md:pr-4 py-2.5 md:py-2.5 text-sm md:text-base border-gray-300 focus:border-primary focus:ring-primary transition-all duration-200 h-11 md:h-12">
                        <SelectValue placeholder="Select a ministry" />
                      </SelectTrigger>
                      <SelectContent className="text-sm md:text-base max-h-60">
                        <SelectItem value="Children's Ministry" className="text-sm md:text-base">
                          Children's Ministry
                        </SelectItem>
                        <SelectItem value="Young Adults Ministry" className="text-sm md:text-base">
                          Young Adults Ministry
                        </SelectItem>
                        <SelectItem value="Women's Ministry" className="text-sm md:text-base">
                          Women's Ministry
                        </SelectItem>
                        <SelectItem value="Men's Ministry" className="text-sm md:text-base">
                          Men's Ministry
                        </SelectItem>
                        <SelectItem value="Other" className="text-sm md:text-base">
                          Other Ministry
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>

                {/* Submit Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-3 md:pt-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    className="flex-1 w-full"
                  >
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="w-full border-gray-300 hover:bg-gray-50 transition-all duration-200 text-sm md:text-base h-11 md:h-12"
                    >
                      Cancel
                    </Button>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 w-full"
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base h-11 md:h-12"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-white border-t-transparent rounded-full" />
                          <span className="text-xs md:text-sm">Submitting...</span>
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="flex items-center gap-1 md:gap-2"
                          whileHover={{ x: 2 }}
                        >
                          <Send className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-xs md:text-sm">Submit Interest</span>
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
                className="bg-gray-50 px-4 md:px-6 py-3 md:py-4 border-t border-gray-200"
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