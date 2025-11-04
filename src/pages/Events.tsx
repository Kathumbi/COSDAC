"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, MapPin, Clock, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  featured?: boolean;
}

const eventsData: EventItem[] = [
  { id: 1, title: "Music Sabbath / Choir Day", date: "Nov 1, 2025", location: "COSDAC", time: "9:00 AM", category: "worship", featured: true },
  { id: 2, title: "Pastorate Sabbath", date: "Nov 8, 2025", location: "COSDAC", time: "9:00 AM", category: "worship" },
  { id: 3, title: "Adventurers Campout", date: "Nov 6–9, 2025", location: "Oloiden Camp Site", time: "10:00 AM", category: "youth", featured: true },
  { id: 4, title: "EKUC Ambassadors Retreat", date: "Dec 14–21, 2025", location: "Mtwapa Education Centre", time: "10:00 AM", category: "youth" },
  { id: 5, title: "Community Outreach", date: "Nov 15, 2025", location: "Local Community", time: "2:00 PM", category: "mission" },
  { id: 6, title: "Bible Study Workshop", date: "Nov 22, 2025", location: "Church Hall", time: "6:30 PM", category: "education" },
];

const categoryColors = {
  worship: "bg-blue-100 text-blue-800 border-blue-200",
  youth: "bg-green-100 text-green-800 border-green-200",
  mission: "bg-orange-100 text-orange-800 border-orange-200",
  education: "bg-purple-100 text-purple-800 border-purple-200",
};

export default function EventsPage() {
  const [query, setQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", "worship", "youth", "mission", "education"];

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeCategory === "all" || event.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredEvents = eventsData.filter(event => event.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header with Integrated Search */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Title and Search Section */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-display"
            >
              Upcoming Events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8"
            >
              Join us for worship, fellowship, and community events
            </motion.p>
          </div>

          {/* Search Bar - Fixed Visibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 z-10" />
              <Input
                type="text"
                placeholder="Search events by name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-base border-2 border-white/30 bg-white text-gray-900 placeholder-gray-500 focus:border-white focus:bg-white/95 focus:ring-2 focus:ring-white/50 transition-all duration-300 rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Category Filters 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <Filter className="w-5 h-5 text-gray-500 mt-2" />
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>*/}

        {/* Search Results Info */}
        {(query || activeCategory !== "all") && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 bg-white rounded-lg p-4 shadow-sm max-w-2xl mx-auto"
          >
            <p className="text-gray-700">
              Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
              {query && ` matching "${query}"`}
              {activeCategory !== "all" && ` in ${activeCategory}`}
            </p>
            {(query || activeCategory !== "all") && (
              <button
                onClick={() => {
                  setQuery("");
                  setActiveCategory("all");
                }}
                className="text-primary hover:text-primary/80 underline text-sm mt-2 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </motion.div>
        )}

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">
              Featured Events
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {featuredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className="bg-gradient-to-br from-white to-blue-50/50 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-primary text-white px-3 py-1">
                          Featured
                        </Badge>
                        <Badge className={`${categoryColors[event.category as keyof typeof categoryColors]} px-3 py-1`}>
                          {event.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mt-3">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* All Events */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">
            All Events
          </h2>

          <AnimatePresence mode="wait">
            {filteredEvents.length > 0 ? (
              <motion.div
                key="events-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                {filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    layout
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className="bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <Badge className={`${categoryColors[event.category as keyof typeof categoryColors]} px-3 py-1`}>
                            {event.category}
                          </Badge>
                          {event.featured && (
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 px-2 py-1 text-xs">
                              ★ Featured
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                          {event.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm line-clamp-1">{event.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-16"
              >
                <Calendar className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No events found
                </h3>
                <p className="text-gray-500 mb-6">
                  {query || activeCategory !== "all" 
                    ? "Try adjusting your search or filter criteria"
                    : "Check back soon for upcoming events"
                  }
                </p>
                {(query || activeCategory !== "all") && (
                  <Button
                    onClick={() => {
                      setQuery("");
                      setActiveCategory("all");
                    }}
                    variant="outline"
                  >
                    Clear filters
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl w-full max-w-md mx-auto relative shadow-2xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-white/20 text-white border-none">
                    {selectedEvent.category}
                  </Badge>
                  {selectedEvent.featured && (
                    <Badge className="bg-yellow-400 text-yellow-900 border-none">
                      Featured
                    </Badge>
                  )}
                </div>
                <h2 className="text-xl font-bold pr-10">{selectedEvent.title}</h2>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">{selectedEvent.date}</p>
                      <p className="text-sm text-gray-600">Event Date</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">{selectedEvent.time}</p>
                      <p className="text-sm text-gray-600">Event Time</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">{selectedEvent.location}</p>
                      <p className="text-sm text-gray-600">Location</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => setSelectedEvent(null)}
                  >
                    Close Details
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      // Add to calendar functionality
                      console.log('Add to calendar:', selectedEvent);
                    }}
                  >
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}