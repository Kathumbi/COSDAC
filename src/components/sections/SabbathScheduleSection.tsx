"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Church } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const scheduleItems = [
  {
    time: "9:00 AM",
    title: "Sabbath School",
    icon: Clock,
    description:
      "A time to study the Word and grow spiritually with fellow members.",
  },
  {
    time: "10:00 AM",
    title: "Lesson Study",
    icon: BookOpen,
    description: "Deep dive into Bible lessons with discussion and reflection.",
  },
  {
    time: "11:00 AM",
    title: "Divine Hour",
    icon: Church,
    description: "Main worship service with singing, preaching, and prayers.",
  },
  {
    time: "2:00 PM",
    title: "Afternoon & Bible Study",
    icon: BookOpen,
    description: "Fellowship, Bible study, and interactive group activities.",
  },
];

// animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const SabbathScheduleSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    visit: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.message.trim()) {
      alert("Please share your prayer request before submitting 🙏");
      return;
    }

    console.log("Prayer Request Submitted:", form);
    alert("🙏 Your prayer request has been received. Thank you!");
    setOpen(false);
    setForm({ name: "", phone: "", email: "", message: "", visit: false });
  };

  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden">
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <motion.div variants={fadeUp} custom={0} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-gray-900">
              Sabbath Schedule
            </h2>
            <p className="text-gray-600 text-sm sm:text-base px-2">
              Join us every Saturday for worship and fellowship
            </p>
          </motion.div>

          {/* Schedule Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 md:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {scheduleItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={index + 1}
                className="bg-white border rounded-xl sm:rounded-lg p-4 sm:p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer active:scale-[0.98]"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                    {/* Fixed icon sizing - use className for responsive sizing */}
                    <item.icon className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xl sm:text-2xl font-semibold text-primary leading-tight">
                      {item.time}
                    </p>
                    <p className="text-gray-800 font-medium text-sm sm:text-base truncate">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Animated Description */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    openIndex === index
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base"
                >
                  {item.description}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button
              variant="cta"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base h-11 sm:h-12 transition-transform active:scale-95"
              onClick={() => setOpen(true)}
            >
              Request Prayer
            </Button>

            <a
              href="https://maps.google.com/?q=Cornerstone+SDA+Church+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base h-11 sm:h-12 transition-transform active:scale-95"
              >
                Location & Directions
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Prayer Request Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md w-[95vw] mx-2 sm:mx-0 rounded-xl sm:rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">🙏 Share a Prayer Request</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-2 sm:mt-4">
            <Input
              name="name"
              placeholder="Your Name (optional)"
              value={form.name}
              onChange={handleChange}
              className="text-sm sm:text-base h-11 sm:h-12"
            />
            <Input
              name="phone"
              placeholder="Phone Number (optional)"
              value={form.phone}
              onChange={handleChange}
              className="text-sm sm:text-base h-11 sm:h-12"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={handleChange}
              className="text-sm sm:text-base h-11 sm:h-12"
            />
            <Textarea
              name="message"
              placeholder="Your Prayer Request (required)"
              value={form.message}
              onChange={handleChange}
              required
              className="text-sm sm:text-base min-h-[100px] sm:min-h-[120px] resize-vertical"
            />

            <div className="flex items-start space-x-2 sm:space-x-3 pt-2">
              <Checkbox
                id="visit"
                checked={form.visit}
                onCheckedChange={(checked) =>
                  setForm({ ...form, visit: !!checked })
                }
                className="mt-0.5 sm:mt-1"
              />
              <Label htmlFor="visit" className="text-xs sm:text-sm leading-relaxed">
                I would like a visit from the eldership team
              </Label>
            </div>

            <DialogFooter className="pt-2 sm:pt-4">
              <Button 
                type="submit" 
                className="w-full text-sm sm:text-base h-11 sm:h-12"
              >
                Submit Request
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SabbathScheduleSection;