import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "/ImageUploads/Church Building.png",
    title: "Welcome to Cornerstone SDA Church",
    subtitle: "Our Reason Is Mission •  We are a Christ-centered church family in the heart of Nairobi, rooted in Seventh-day Adventist beliefs and uplifted by a vibrant, diverse community.",
    cta: { 
      label: "Join Us", 
      href: "https://maps.google.com/?q=Cornerstone+SDA+Church+Nairobi",
      type: "external" 
    },
  },
  {
    image:  "/ImageUploads/Church Choir.png",
    title: "Worship With Us",
    subtitle: "Sabbath Services • Bible Study • Fellowship",
    cta: { 
      label: "Join Us", 
      href: "https://maps.google.com/?q=Cornerstone+SDA+Church+Nairobi",
      type: "external" 
    },
  },
  {
    image: "/ImageUploads/Women.jpg",
    title: "Vibrant Women's Ministry",
    subtitle: "Empowering women to grow in faith, build relationships, and serve our community with purpose.",
    cta: { 
      label: "Explore Ministries", 
      href: "/ministries",
      type: "internal" 
    },
  },
  {
    image:  "/ImageUploads/choir.jpg",
    title: "Serving Nairobi",
    subtitle: "Hands and hearts for our community through outreach and service projects.",
    cta: { 
      label: "See Events", 
      href: "/events",
      type: "internal" 
    },
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleCtaClick = (cta: { href: string; type: string }) => {
    if (cta.type === "external") {
      // Open external link in new tab
      window.open(cta.href, "_blank", "noopener,noreferrer");
    } else {
      // Navigate internally using React Router
      navigate(cta.href);
    }
  };

  return (
    <section id="home" className="relative">
      <Carousel 
        className="w-full" 
        opts={{ 
          loop: true,
          startIndex: currentSlide,
        }}
      >
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={i}>
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-lg border">
                <img
                  src={s.image}
                  alt={`${s.title} - Cornerstone SDA Church- Nairobi`}
                  className="h-full w-full object-cover brightness-75"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                
                {/* Enhanced gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Text content with better contrast */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 xl:p-10 animate-enter">
                  <div className="max-w-3xl mx-auto md:mx-0 md:ml-8 lg:ml-12">
                    {i === 0 ? (
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-2xl [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)]">
                        {s.title}
                      </h1>
                    ) : (
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-2xl [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)]">
                        {s.title}
                      </h2>
                    )}
                    
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 md:mb-6 lg:mb-8 drop-shadow-xl [text-shadow:_0_2px_6px_rgb(0_0_0_/_80%)] max-w-2xl">
                      {s.subtitle}
                    </p>
                    
                    <Button 
                      onClick={() => handleCtaClick(s.cta)}
                      variant="hero" 
                      size="xl" 
                      aria-label={s.cta.label}
                      className="bg-white text-gray-900 hover:bg-gray-100 font-semibold text-sm sm:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                    >
                      {s.cta.label}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation arrows with better visibility */}
        <CarouselPrevious className="hidden md:flex left-2 lg:left-4 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm size-10 lg:size-12" />
        <CarouselNext className="hidden md:flex right-2 lg:right-4 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm size-10 lg:size-12" />

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSlider;