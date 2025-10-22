import { Card, CardContent } from "@/components/ui/card";

interface Leader {
  name: string;
  title: string;
  image: string;
  description?: string;
  email?: string;
}

const leaders: Leader[] = [
  {
    name: "Pr. Zachary Muthomi",
    title: "Senior Pastor",
    image: "/Image uploads/Zachary Muthomi.jpg",
    description: "Spiritual leader guiding our congregation",
    email: "pastor@cornerstonesda.org",
  },
  {
    name: "Elder Moses Nturo",
    title: "Head Elder 2025",
    image: "/Image uploads/Moses Nturo.jpg",
    description: "Supporting spiritual growth and care",
  },
  {
    name: "Josephat Kombo",
    title: "Church Treasurer",
    image: "/Image uploads/Josephat Kombo.jpg",
    description: "Managing church finances with integrity",
  },
  {
    name: "Lavender Olango",
    title: "Church Clerk",
    image: "/Image uploads/Lavender Olango.jpg",
    description: "Maintaining church records and communication",
  },
];

const LeadershipSection = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-24 fade-in-up">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Meet Our Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated church leaders guide us in faith, service, and love.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <Card
              key={leader.name}
              className="hover:shadow-lg hover:scale-[1.03] transition-all duration-500 ease-out fade-in-up rounded-xl overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-square overflow-hidden relative group">
                <img
                  src={leader.image}
                  alt={`${leader.name} - ${leader.title}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="p-5 text-center">
                <h3 className="font-semibold text-lg mb-1">{leader.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {leader.title}
                </p>
                {leader.description && (
                  <p className="text-muted-foreground text-sm mb-2">
                    {leader.description}
                  </p>
                )}
                {leader.email && (
                  <a
                    href={`mailto:${leader.email}`}
                    className="text-xs text-primary hover:underline"
                  >
                    {leader.email}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
