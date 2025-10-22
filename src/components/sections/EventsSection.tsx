import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const events = [
  { title: "Music Sabbath/Choir Day", date: "Nov 1, 2025", location: " COSDAC ", time: "9:00 AM" },
  { title: "Pastorate Sabbath", date: "Nov 8, 2025", location: "COSDAC", time: "9:00 AM" },
  { title: "Adventures Campout", date: "Nov 6-9, 2025", location: "Oloiden Camp Site", time: "10:00 AM" },
  { title: "EKUC Ambassadors Retreat", date: "Dec 14 - 21, 2025", location: "Mtwapa Education Centre", time: "10:00 AM" },
];

const EventsSection = () => {
  const handleRSVP = (title: string) => {
    toast({
      title: "RSVP sent",
      description: `Thanks! We will keep you posted about ${title}.`,
    });
  };

  return (
    <section id="events" className="bg-muted/30 border-y fade-in-up">
      <div className="container py-16 md:py-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Events & Calendar
          </h2>
          <CalendarDays className="hidden md:block text-primary animate-pulse" />
        </div>

        {/* Event List */}
        <div className="grid gap-4">
          {events.map((e, index) => (
            <article
              key={e.title}
              className={`rounded-lg border bg-background p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between transition-all duration-500 ease-out hover:shadow-lg hover:scale-[1.02] fade-in-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div>
                <h3 className="font-medium text-lg">{e.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {e.date} • {e.time} • {e.location}
                </p>
              </div>
              <div className="mt-3 md:mt-0">
                <Button
                  variant="cta"
                  className="transition-transform duration-300 hover:scale-105 pulse-glow"
                  onClick={() => handleRSVP(e.title)}
                >
                  RSVP
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
