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
    title: "Church Pastor",
    image: "/ImageUploads/Zachary Muthomi.jpg",
    description: "",
    email: "",
  },
  {
    name: "Elder Moses Nturo",
    title: "Head Elder 2025",
    image: "/ImageUploads/Moses Nturo.jpg",
    description: "",
  },
  {
    name: "Josephat Kombo",
    title: "Church Treasurer",
    image: "/ImageUploads/Josephat Kombo.jpg",
    description: "",
  },
  {
    name: "Lavender Olango",
    title: "Church Clerk",
    image: "/ImageUploads/Lavender Olango.jpg",
    description: "",
  },
];

const LeadershipSection = () => {
  return (
    <section className="bg-muted/30 py-12 sm:py-16 md:py-24">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
            Church Leadership 2025
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Our dedicated church leaders guide us in faith, service, and love.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {leaders.map((leader, index) => (
            <Card
              key={leader.name}
              className="hover:shadow-lg hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-500 ease-out rounded-xl overflow-hidden border-border/50"
            >
              <div className="p-4 sm:p-5 md:p-6 pb-3 sm:pb-4 flex flex-col items-center">
                {/* Circular Image Container */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden relative group mb-3 sm:mb-4 border-3 sm:border-4 border-muted">
                  <img
                    src={leader.image}
                    alt={`${leader.name} - ${leader.title}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                  {/* Overlay hover effect */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardContent className="p-0 text-center space-y-1 sm:space-y-2">
                  <h3 className="font-semibold text-base sm:text-lg md:text-lg leading-tight">
                    {leader.name}
                  </h3>
                  <p className="text-primary text-xs sm:text-sm font-medium">
                    {leader.title}
                  </p>
                  {leader.description && (
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {leader.description}
                    </p>
                  )}
                  {leader.email && (
                    <a
                      href={`mailto:${leader.email}`}
                      className="text-xs text-primary hover:underline block mt-1"
                    >
                      {leader.email}
                    </a>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile-friendly additional spacing */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            Tap on cards to learn more about our leaders
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;