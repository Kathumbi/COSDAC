"use client";

import { motion } from "framer-motion";

const events = [
  { title: "Music Sabbath / Choir Day", date: "Nov 1, 2025", location: "COSDAC", time: "9:00 AM" },
  { title: "Pastorate Sabbath", date: "Nov 8, 2025", location: "COSDAC", time: "9:00 AM" },
  { title: "Adventurers Campout", date: "Nov 6–9, 2025", location: "Oloiden Camp Site", time: "10:00 AM" },
  { title: "EKUC Ambassadors Retreat", date: "Dec 14–21, 2025", location: "Mtwapa Education Centre", time: "10:00 AM" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const EventsSection = () => {
  return (
    <section className="w-full bg-background">
      <div className="px-4 sm:px-6 py-6 sm:py-8 md:py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-2 sm:mb-3">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm max-w-xl mx-auto">
            Join us in worship, fellowship, and mission — everyone's welcome.
          </p>
        </motion.div>

        {/* Event Cards Container */}
        <div className="border border-border/30 rounded-lg sm:rounded-xl bg-card shadow-sm p-3 sm:p-4 md:p-6 max-w-3xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            {events.map((event, i) => (
              <motion.article
                key={`${event.title}-${i}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="rounded-lg border border-border/30 bg-background p-3 sm:p-4 hover:shadow-sm hover:scale-[1.005] transition-all duration-200"
              >
                <div className="flex flex-col gap-2 sm:gap-3">
                  {/* Title */}
                  <h3 className="font-semibold text-base sm:text-lg leading-tight">
                    {event.title}
                  </h3>
                  
                  {/* Event Details */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="space-y-1">
                      {/* Date and Time */}
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                        <span className="inline-flex items-center gap-1 text-foreground">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date}
                        </span>
                        <span className="text-muted-foreground hidden sm:inline">•</span>
                        <span className="inline-flex items-center gap-1 text-foreground">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </span>
                      </div>
                      
                      {/* Location */}
                      <div className="flex items-center gap-1 text-muted-foreground text-xs sm:text-sm">
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <button className="w-full sm:w-auto px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors duration-200 mt-1 sm:mt-0">
                      Add to Calendar
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-6 sm:mt-8 pt-4 border-t border-border/30"
          >
            <p className="text-muted-foreground text-xs sm:text-sm">
              Check back regularly for updates and new events
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;