import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/HeroSlider";
import SabbathScheduleSection from "@/components/sections/SabbathScheduleSection";
import LiveSermonsSection from "@/components/sections/LiveSermonsSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import EventsSection from "@/components/sections/EventsSection";
import CombinedPage from "@/components/sections/CombinedPage";


const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Cornerstone SDA Church Nairobi",
    address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
    url: typeof window !== "undefined" ? window.location.origin : "",
    sameAs: [
      "https://facebook.com/",
      "https://instagram.com/",
      "https://youtube.com/",
    ],
  };

  return (
    <>
      <Seo
        title="Cornerstone SDA Church Nairobi | Worship, Sermons, Ministries"
        description="Worship with us in Nairobi. Watch live sermons, explore ministries, see upcoming events, and get involved at Cornerstone SDA Church."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main>
        <HeroSlider />
        <SabbathScheduleSection />
        <CombinedPage />
        <LeadershipSection />
        <LiveSermonsSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
