import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const YOUTUBE_LIVE_EMBED = "https://www.youtube.com/embed/5K0B37mhwRI";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@cornerstone-sda-church-nairobi";

const sermons = [
  { title: "If You Don't Ask, You Mess", speaker: "Pr. Prof Rei kesis",  url: "https://youtu.be/9e-t87_r610?si=je8DrK4-p7xp12r3" },
  { title: "You are Saved, but not yet Safe", speaker: "Pr. Prof Rei kesis",  url: "https://youtu.be/RwOjf5fPR8o?si=G4uEouXIPzsa7HUE" },
  { title: "Healthy Living", speaker: "Mrs. Catherine Bikeri",  url: "https://youtu.be/BxKUm3ZW4Bk?si=3DuAGKUCDTyeQsL_" },
  { title: "You Must Act Immediately", speaker: "Pr. Prof Rei kesis",  url: "https://youtu.be/Mpd6iSTkHW0?si=p13THuYgpXceCLpt" },
];

const LiveSermonsSection = () => {
  return (
    <section id="sermons" className="bg-muted/30 border-y overflow-hidden">
      <div className="container px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <AnimatedSection>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left: Live Stream */}
            <div className="w-full order-2 lg:order-1">
              <div className="text-center lg:text-left mb-6 lg:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
                  Watch Live
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Join our Sabbath service live stream and be part of uplifting worship and the Word.
                </p>
              </div>
              
              <div className="aspect-video w-full overflow-hidden rounded-lg sm:rounded-xl border shadow-sm hover:shadow-lg transition-shadow duration-500">
                <iframe
                  title="Cornerstone SDA Church- Nairobi Live Stream"
                  src={YOUTUBE_LIVE_EMBED}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              {/* Mobile Buttons - Only show on mobile below video */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:hidden">
                <a href={YOUTUBE_LIVE_EMBED} target="_blank" rel="noreferrer" className="flex-1">
                  <Button variant="hero" className="w-full transition-transform duration-300 active:scale-95">
                    Watch Live
                  </Button>
                </a>
                <a href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full transition-transform duration-300 active:scale-95">
                    View Archive
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Recent Sermons */}
            <div className="w-full order-1 lg:order-2">
              <div className="text-center lg:text-left mb-6 lg:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">Recent Sermons</h3>
                <p className="text-muted-foreground text-sm sm:text-base lg:hidden">
                  Tap on any sermon to watch
                </p>
              </div>
              
              <ul className="space-y-3 sm:space-y-4">
                {sermons.map((s, i) => (
                  <AnimatedSection key={i} delay={0.1 * i}>
                    <li className="p-3 sm:p-4 rounded-lg border bg-background hover:shadow-md active:scale-[0.98] lg:hover:-translate-y-1 transition-all duration-300">
                      <a href={s.url} target="_blank" rel="noreferrer" className="block">
                        <p className="font-medium text-primary text-sm sm:text-base hover:underline line-clamp-2">
                          {s.title}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                          {s.speaker}
                        </p>
                      </a>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>

              {/* Desktop Buttons - Only show on desktop */}
              <div className="hidden lg:flex items-center gap-3 mt-6">
                <a href={YOUTUBE_LIVE_EMBED} target="_blank" rel="noreferrer">
                  <Button variant="hero" className="transition-transform duration-300 hover:scale-105">
                    Watch Live
                  </Button>
                </a>
                <a href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="transition-transform duration-300 hover:scale-105">
                    View Archive
                  </Button>
                </a>
              </div>

              {/* Mobile hint */}
              <div className="lg:hidden text-center mt-6">
                <p className="text-xs text-muted-foreground">
                  More sermons available on our YouTube channel
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LiveSermonsSection;