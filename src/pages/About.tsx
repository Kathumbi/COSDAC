import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeadershipSection from "@/components/sections/LeadershipSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, BookOpen, Globe } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Faith & Love",
    description: "Centered on Christ's love and guided by biblical truth"
  },
  {
    icon: Users,
    title: "Community",
    description: "Building meaningful relationships and supporting one another"
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Growing in knowledge of God's Word and His will for our lives"
  },
  {
    icon: Globe,
    title: "Mission",
    description: "Sharing the gospel and serving our community with compassion"
  }
];

const About = () => {
  return (
    <>
      <Seo
        title="About Us | Cornerstone SDA Church Nairobi"
        description="Learn about Cornerstone SDA Church Nairobi - our mission, values, leadership, and commitment to faith, community, and service."
      />
      
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-semibold text-center mb-4 animate-fade-in">
              About Cornerstone SDA Church
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Building characters for eternity through worship, the Word, and service
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                      <value.icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <LeadershipSection />

        {/* Our Mission */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Our Mission</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-center text-lg leading-relaxed">
                At Cornerstone SDA Church Nairobi, we are committed to knowing Jesus, 
                growing in His grace, and going in His name to bless our city and beyond. 
                We believe in the power of Scripture, the importance of community, and 
                the joy of serving others in Christ's love.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
