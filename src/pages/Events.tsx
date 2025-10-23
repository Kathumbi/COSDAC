"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Calendar, MapPin, Clock, X, ArrowLeft } from "lucide-react";
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
}

const eventsData: EventItem[] = [
  { id: 1, title: "Music Sabbath / Choir Day", date: "Nov 1, 2025", location: "COSDAC", time: "9:00 AM" },
  { id: 2, title: "Pastorate Sabbath", date: "Nov 8, 2025", location: "COSDAC", time: "9:00 AM" },
  { id: 3, title: "Adventures Campout", date: "Nov 6–9, 2025", location: "Oloiden Camp Site", time: "10:00 AM" },
  { id: 4, title: "EKUC Ambassadors Retreat", date: "Dec 14–21, 2025", location: "Mtwapa Education Centre", time: "10:00 AM" },
];

export default function EventsPage() {
  const [query, setQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const navigate = useNavigate();

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* 🌄 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-64 md:h-80 w-full overflow-hidden"
      >
        <img
          src="/ImageUploads/Events.jpg"
          alt="Events Banner"
          className="w-full h-full object-cover brightness-75"
        />

        {/* ✅ Back Button (Top-left like Beliefs page) */}
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
          <h1 className="text-4xl md:text-5xl font-display font-bold drop-shadow-lg">
            Upcoming Events
          </h1>
        </div>
      </motion.div>

      {/* 🔍 Search Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-5xl mx-auto px-4 py-10"
      >
        <div className="relative w-full sm:w-1/2 mx-auto mb-10">
          <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for an event..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* 📅 Event Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className="hover:shadow-lg transition-shadow cursor-pointer bg-white"
                onClick={() => setSelectedEvent(event)}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-primary">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} /> <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} /> <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} /> <span>{event.location}</span>
                  </div>
                  <Badge variant="default">In-person</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* 🪟 Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 w-full max-w-lg relative shadow-lg"
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
            <p className="text-gray-500 mb-4">
              {selectedEvent.date} • {selectedEvent.time}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <MapPin size={16} /> {selectedEvent.location}
            </p>
            <div className="mt-5 flex justify-end">
              <Button onClick={() => setSelectedEvent(null)}>Close</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
