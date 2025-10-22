"use client";

import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Church } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const scheduleItems = [
  { time: "9:00 AM", title: "Sabbath School", icon: Clock },
  { time: "10:00 AM", title: "Lesson Study", icon: BookOpen },
  { time: "11:00 AM", title: "Divine Hour", icon: Church },
  { time: "2:00 PM", title: "Afternoon & Bible Study", icon: BookOpen },
];

// animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const SabbathScheduleSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-gray-900">
              Sabbath Schedule
            </h2>
            <p className="text-gray-600">
              Join us every Saturday for worship and fellowship
            </p>
          </motion.div>

          {/* Schedule Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-4 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {scheduleItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={index + 1}
                className="bg-white border rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-primary">
                      {item.time}
                    </p>
                    <p className="text-gray-800 font-medium">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/about">
              <Button
                variant="cta"
                size="lg"
                className="w-full sm:w-auto transition-transform hover:scale-105"
              >
                About Our Church
              </Button>
            </Link>
            <a
              href="https://maps.google.com/?q=Cornerstone+SDA+Church+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto transition-transform hover:scale-105"
              >
                Location & Directions
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SabbathScheduleSection;
