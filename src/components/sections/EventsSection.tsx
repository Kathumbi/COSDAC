"use client";

import { motion } from "framer-motion";

const events = [
  { title: "Music Sabbath / Choir Day", date: "Nov 1, 2025", location: "COSDAC", time: "9:00 AM" },
  { title: "Pastorate Sabbath", date: "Nov 8, 2025", location: "COSDAC", time: "9:00 AM" },
  { title: "Adventurers Campout", date: "Nov 6–9, 2025", location: "Oloiden Camp Site", time: "10:00 AM" },
  { title: "EKUC Ambassadors Retreat", date: "Dec 14–21, 2025", location: "Mtwapa Education Centre", time: "10:00 AM" },
  { title: "EKUC Ambassadors Retreat", date: "Dec 14–21, 2025", location: "Mtwapa Education Centre", time: "10:00 AM" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const EventsSection = () => {
  return (
    <section
      id="events"
      className="border-y border-border/40 bg-muted/10"
    >
      <div className="container py-12 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground mt-2 text-base md:text-lg">
            Join us in worship, fellowship, and mission — everyone’s welcome.
          </p>
        </motion.div>

        {/* Event Cards */}
        <div className="border rounded-xl bg-background shadow-sm p-6 md:p-8 max-w-3xl mx-auto">
          <div className="grid gap-5 md:gap-6">
            {events.map((event, i) => (
              <motion.article
                key={event.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="rounded-lg border border-border/30 bg-muted/20 p-5 md:p-6 hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-lg md:text-xl">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {event.date} • {event.time} • {event.location}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
