import heroWorship from "@/assets/hero-worship.jpg";
import heroYouth from "@/assets/hero-youth.jpg";
import heroOutreach from "@/assets/hero-outreach.jpg";
const heroBuilding = "/Image uploads/Church Choir.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: heroBuilding,
    title: "Welcome to Cornerstone SDA Church",
    subtitle: "Our Reason Is Mission •  We are a Christ-centered church family in the heart of Nairobi, rooted in Seventh-day Adventist beliefs and uplifted by a vibrant, diverse community.",
    
    cta: { label: "Join Us", href: "#about" },
  },
  {
    image: heroWorship,
    title: "Worship With Us",
    subtitle: "Sabbath Services • Bible Study • Fellowship",
    cta: { label: "Join Us", href: "#about" },
  },
  {
    image: heroYouth,
    title: "Vibrant Youth Community",
    subtitle: "Growing in faith and purpose together",
    cta: { label: "Explore Ministries", href: "#ministries" },
  },
  {
    image: heroOutreach,
    title: "Serving Nairobi",
    subtitle: "Hands and hearts for our community",
    cta: { label: "See Events", href: "#events" },
  },
];

const HeroSlider = () => {
  return (
    <section id="home" className="relative">
      <Carousel className="container">
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={i}>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border">
                <img
                  src={s.image}
                  alt={`${s.title} - Cornerstone SDA Church- Nairobi`}
                  className="h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 animate-enter">
                  {i === 0 ? (
                    <h1 className="text-3xl md:text-5xl font-semibold mb-2">{s.title}</h1>
                  ) : (
                    <h2 className="text-3xl md:text-5xl font-semibold mb-2">{s.title}</h2>
                  )}
                  <p className="text-muted-foreground text-sm md:text-base mb-4">{s.subtitle}</p>
                  <a href={s.cta.href}>
                    <Button variant="hero" size="xl" aria-label={s.cta.label}>
                      {s.cta.label}
                    </Button>
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default HeroSlider;
