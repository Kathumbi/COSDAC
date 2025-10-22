"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← Add this
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define belief type
interface Belief {
  title: string;
  description: string;
}

interface BeliefCategory {
  category: string;
  beliefs: Belief[];
}

// Full 28 Fundamental Beliefs with placeholder descriptions
const beliefData: BeliefCategory[] = [
  {
    category: "God",
    beliefs: [
      { title: "Holy Scriptures", description: "The Bible is the inspired Word of God, providing guidance, instruction, and principles for living." },
      { title: "The Trinity", description: "God is one being revealed in three persons: Father, Son, and Holy Spirit." },
      { title: "God the Father", description: "God the Father is the Creator, Sustainer, and loving guide of all humanity." },
      { title: "God the Son (Jesus Christ)", description: "Jesus Christ is the Son of God, fully divine and fully human, who lived, died, and rose for our salvation." },
      { title: "God the Holy Spirit", description: "The Holy Spirit works in hearts to convince, guide, comfort, and empower believers." },
    ],
  },
  {
    category: "Humanity",
    beliefs: [
      { title: "Creation", description: "God created the universe, the earth, and all life in six literal days." },
      { title: "Nature of Humanity", description: "Humans were created in God’s image but fell into sin and are in need of redemption." },
    ],
  },
  {
    category: "Salvation",
    beliefs: [
      { title: "The Great Controversy", description: "A cosmic conflict exists between Christ and Satan, good and evil." },
      { title: "The Life, Death and Resurrection of Christ", description: "Jesus’ life, death, and resurrection provide redemption and victory over sin and death." },
      { title: "The Experience of Salvation", description: "Salvation is by grace through faith in Christ and results in transformation and eternal life." },
      { title: "Growing in Christ", description: "Believers grow in spiritual maturity through prayer, Bible study, and the work of the Holy Spirit." },
    ],
  },
  {
    category: "Church",
    beliefs: [
      { title: "The Church", description: "The Church is the community of believers called to proclaim the gospel and serve humanity." },
      { title: "The Remnant and its Mission", description: "A faithful remnant keeps God’s commandments and has the mission to proclaim His message." },
      { title: "Unity in the Body of Christ", description: "All believers are united in Christ, transcending differences of race, culture, or denomination." },
      { title: "Baptism", description: "Baptism by immersion symbolizes repentance, acceptance of Christ, and entry into the Church." },
      { title: "The Lord's Supper (Communion)", description: "Communion commemorates Christ’s sacrifice and fosters spiritual renewal and unity." },
    ],
  },
  {
    category: "Daily Living",
    beliefs: [
      { title: "Spiritual Gifts and Ministries", description: "God gives gifts to believers to serve others and build His Church." },
      { title: "The Gift of Prophecy", description: "Prophecy is a gift of the Holy Spirit to guide, comfort, and strengthen the Church." },
      { title: "The Law of God", description: "God’s commandments reveal His character and guide believers in loving obedience." },
      { title: "The Sabbath", description: "The seventh-day Sabbath is a sacred time of rest, worship, and fellowship with God." },
      { title: "Stewardship", description: "Believers are called to wisely manage time, talents, and resources for God’s glory." },
      { title: "Christian Behavior", description: "Christians are called to live holy, loving, and ethical lives." },
      { title: "Marriage and the Family", description: "Marriage is a divine institution, and family life should reflect God’s love." },
    ],
  },
  {
    category: "Restoration (End Times)",
    beliefs: [
      { title: "Christ's Ministry in the Heavenly Sanctuary", description: "Christ ministers on our behalf in the heavenly sanctuary." },
      { title: "The Second Coming of Christ", description: "Jesus will return visibly and gloriously to redeem His people." },
      { title: "Death and Resurrection", description: "Death is a state of unconsciousness until the resurrection of the righteous and the wicked." },
      { title: "The Millennium and the End of Sin", description: "Christ’s return begins the final judgment, the millennium, and the eradication of sin." },
      { title: "The New Earth", description: "God will recreate a new heaven and new earth where righteousness dwells." },
    ],
  },
];

export default function BeliefsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<BeliefCategory | null>(null);
  const navigate = useNavigate();

  const filteredCategories = beliefData.filter(
    (cat) =>
      cat.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.beliefs.some((b) =>
        b.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">

        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-80 mb-12 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/Image uploads/Fundamental Beliefs.jpg"
            alt="Fundamental Beliefs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
            <button
              onClick={() => navigate("/")}
              className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              28 Fundamental Beliefs
            </h2>
            <p className="text-gray-100 text-lg mt-2">
              What Do Adventists Believe?
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search beliefs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />
        </div>

        {/* Category Cards */}
        <AnimatePresence>
          {!selectedCategory && (
            <motion.div
              key="categories"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredCategories.map((cat, idx) => (
                <Card
                  key={cat.category}
                  className="hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory(cat)}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                      <BookOpen size={20} /> {cat.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {cat.beliefs.length} Beliefs
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Drill-down: Beliefs in selected category */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              key="drilldown"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
            >
              <Button
                variant="secondary"
                className="mb-6 flex items-center gap-2"
                onClick={() => setSelectedCategory(null)}
              >
                <ArrowLeft /> Back to Categories
              </Button>

              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                {selectedCategory.category} Beliefs
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCategory.beliefs.map((belief, idx) => (
                  <Card
                    key={belief.title}
                    className="hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer bg-white"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">
                        {belief.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{belief.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}