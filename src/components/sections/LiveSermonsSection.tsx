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
      <div className="container py-16 md:py-24">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: Live Stream */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Watch Live</h2>
              <p className="text-muted-foreground mb-6">
                Join our Sabbath service live stream and be part of uplifting worship and the Word.
              </p>
              <div className="aspect-video w-full overflow-hidden rounded-lg border shadow-lg hover:shadow-xl transition-shadow duration-500">
                <iframe
                  title="Cornerstone SDA Church- Nairobi Live Stream"
                  src={YOUTUBE_LIVE_EMBED}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>

            {/* Right: Recent Sermons */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Recent Sermons</h3>
              <ul className="space-y-3">
                {sermons.map((s, i) => (
                  <AnimatedSection key={i} delay={0.1 * i}>
                    <li className="p-4 rounded-md border bg-background hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <a href={s.url} target="_blank" rel="noreferrer" className="block">
                        <p className="font-medium text-primary hover:underline">{s.title}</p>
                        <p className="text-sm text-muted-foreground">{s.speaker} • {s.date}</p>
                      </a>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3">
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
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LiveSermonsSection;
