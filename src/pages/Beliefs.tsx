"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, X, ChevronDown, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Belief {
  title: string;
  summary: string;
  fullDescription: string;
  scriptures: string[];
}

interface BeliefCategory {
  category: string;
  beliefs: Belief[];
}

const beliefData: BeliefCategory[] = [
  {
    category: "God",
    beliefs: [
      { 
        title: "Holy Scriptures", 
        summary: "The Bible is the inspired Word of God, providing guidance, instruction, and principles for living.",
        fullDescription: `The Holy Scriptures, Old and New Testaments, are the written Word of God, given by divine inspiration. The inspired authors spoke and wrote as they were moved by the Holy Spirit. In this Word, God has committed to humanity the knowledge necessary for salvation. The Holy Scriptures are the supreme, authoritative, and the infallible revelation of His will. They are the standard of character, the test of experience, the definitive revealer of doctrines, and the trustworthy record of God's acts in history.`,
        scriptures: ["Ps. 119:105", "Prov. 30:5, 6", "Isa. 8:20", "John 17:17", "1 Thess. 2:13", "2 Tim. 3:16, 17", "Heb. 4:12", "2 Peter 1:20, 21"]
      },
      { 
        title: "The Trinity", 
        summary: "God is one being revealed in three persons: Father, Son, and Holy Spirit.",
        fullDescription: `There is one God: Father, Son, and Holy Spirit, a unity of three coeternal Persons. God is immortal, all-powerful, all-knowing, above all, and ever present. He is infinite and beyond human comprehension, yet known through His self-revelation. God, who is love, is forever worthy of worship, adoration, and service by the whole creation.`,
        scriptures: ["Gen. 1:26", "Deut. 6:4", "Isa. 6:8", "Matt. 28:19", "John 3:16", "2 Cor. 1:21, 22", "13:14", "Eph. 4:4-6", "1 Peter 1:2"]
      },
    ],
  },
  {
    category: "Humanity",
    beliefs: [
      { 
        title: "Creation", 
        summary: "God created the universe, and in a recent six-day creation made the heavens and the earth.",
        fullDescription: `God has revealed in Scripture the authentic and historical account of His creative activity. He created the universe, and in a recent six-day creation the Lord made "the heavens and the earth, the sea, and all that is in them" and rested on the seventh day. Thus He established the Sabbath as a perpetual memorial of the work He performed and completed during six literal days that together with the Sabbath constituted the same unit of time that we call a week today. The first man and woman were made in the image of God as the crowning work of Creation, given dominion over the world, and charged with responsibility to care for it. When the world was finished it was "very good," declaring the glory of God.`,
        scriptures: ["Gen. 1-2", "5", "11", "Exod. 20:8-11", "Ps. 19:1-6", "33:6, 9", "104", "Isa. 45:12, 18", "Acts 17:24", "Col. 1:16", "Heb. 1:2", "11:3", "Rev. 10:6", "14:7"]
      },
    ],
  },
  {
    category: "Salvation",
    beliefs: [
      { 
        title: "The Great Controversy", 
        summary: "All humanity is involved in a great controversy between Christ and Satan.",
        fullDescription: `All humanity is now involved in a great controversy between Christ and Satan regarding the character of God, His law, and His sovereignty over the universe. This conflict originated in heaven when a created being, endowed with freedom of choice, in self-exaltation became Satan, God's adversary, and led into rebellion a portion of the angels. He introduced the spirit of rebellion into this world when he led Adam and Eve into sin. This human sin resulted in the distortion of the image of God in humanity, the disordering of the created world, and its eventual devastation at the time of the global flood. Observed by the whole creation, this world became the arena of the universal conflict, out of which the God of love will ultimately be vindicated.`,
        scriptures: ["Gen. 3", "6-8", "Job 1:6-12", "Isa. 14:12-14", "Ezek. 28:12-18", "Rom. 1:19-32", "3:4", "5:12-21", "8:19-22", "1 Cor. 4:9", "Heb. 1:14", "1 Peter 5:8", "2 Peter 3:6", "Rev. 12:4-9"]
      },
    ],
  },
  {
    category: "Church",
    beliefs: [
      { 
        title: "The Church", 
        summary: "The church is the community of believers who confess Jesus Christ as Lord and Saviour.",
        fullDescription: `The church is the community of believers who confess Jesus Christ as Lord and Saviour. In continuity with the people of God in Old Testament times, we are called out from the world; and we join together for worship, for fellowship, for instruction in the Word, for the celebration of the Lord's Supper, for service to humanity, and for the worldwide proclamation of the gospel.`,
        scriptures: ["Gen. 12:1-3", "Exod. 19:3-7", "Matt. 16:13-20", "18:18", "28:19, 20", "Acts 2:38-42", "7:38", "1 Cor. 1:2", "Eph. 1:22, 23", "2:19-22", "3:8-11", "5:23-27", "Col. 1:17, 18", "1 Peter 2:9"]
      },
    ],
  },
];

export default function BeliefsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<BeliefCategory | null>(null);
  const [selectedBelief, setSelectedBelief] = useState<Belief | null>(null);
  const navigate = useNavigate();

  const filteredCategories = beliefData.filter(
    (cat) =>
      cat.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.beliefs.some((b) =>
        b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.summary.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* 🌄 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden"
      >
        <img
          src="/ImageUploads/Fundamental Beliefs.jpg"
          alt="Fundamental Beliefs Banner"
          className="w-full h-full object-cover brightness-75"
        />

        {/* Back Button 
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => navigate(-1)}
          className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-1 sm:gap-2 bg-white/90 hover:bg-white text-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md transition-all duration-300 active:scale-95 z-10 text-xs sm:text-sm"
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" /> 
          <span className="hidden xs:inline">Back</span>
        </motion.button>*/}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg mb-2 leading-tight"
          >
            28 Fundamental Beliefs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg drop-shadow-lg max-w-2xl leading-relaxed"
          >
            What Do Adventists Believe?
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-full max-w-md sm:max-w-lg md:max-w-2xl mt-4"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search beliefs or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-white/20 bg-white/90 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-sm sm:text-base text-gray-900 placeholder-gray-600"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <section className="container py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Search Results Info */}
        {searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="text-sm text-primary font-medium">
                Found {filteredCategories.length} categor{filteredCategories.length !== 1 ? 'ies' : 'y'} matching "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="text-xs text-primary/70 hover:text-primary underline transition-colors sm:self-start"
              >
                Clear search
              </button>
            </div>
          </motion.div>
        )}

        {/* Category Cards */}
        <AnimatePresence>
          {!selectedCategory && (
            <motion.div
              key="categories"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredCategories.map((cat, idx) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className="h-full bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 cursor-pointer transition-all duration-300 overflow-hidden group active:scale-95"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    <CardHeader className="pb-3 p-4 sm:p-6">
                      <CardTitle className="flex items-center gap-3 text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        {cat.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {cat.beliefs.length} Belief{cat.beliefs.length !== 1 ? 's' : ''}
                        </span>
                        <div className="text-gray-400 group-hover:text-primary transition-colors duration-300 text-lg">
                          →
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Drill-down: Beliefs in selected category */}
        <AnimatePresence>
          {selectedCategory && !selectedBelief && (
            <motion.div
              key="drilldown"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  variant="outline"
                  className="flex items-center gap-2 rounded-full bg-white hover:bg-gray-50 text-gray-700 border-gray-200 transition-all duration-200 active:scale-95 text-sm w-full sm:w-auto justify-center sm:justify-start shadow-sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Categories
                </Button>
              </motion.div>

              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {selectedCategory.category} Beliefs
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
              </motion.div>

              {/* Beliefs Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {selectedCategory.beliefs.map((belief, idx) => (
                  <motion.div
                    key={belief.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className="h-full bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden group cursor-pointer active:scale-95"
                      onClick={() => setSelectedBelief(belief)}
                    >
                      <CardHeader className="pb-3 p-4 sm:p-6">
                        <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                          {belief.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 p-4 sm:p-6 pt-0">
                        <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                          {belief.summary}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex flex-wrap gap-1">
                            {belief.scriptures.slice(0, 2).map((scripture, i) => (
                              <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                                {scripture}
                              </span>
                            ))}
                            {belief.scriptures.length > 2 && (
                              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                +{belief.scriptures.length - 2}
                              </span>
                            )}
                          </div>
                          <div className="text-gray-400 group-hover:text-primary transition-colors duration-300 text-sm font-medium flex items-center gap-1">
                            Read <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!selectedCategory && filteredCategories.length === 0 && searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No beliefs found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms to find what you're looking for.
            </p>
          </motion.div>
        )}
      </section>

      {/* Belief Detail Modal */}
      <AnimatePresence>
        {selectedBelief && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedBelief(null)}
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl sm:max-w-3xl md:max-w-4xl max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-primary/5 to-primary/10">
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                      {selectedBelief.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                      {selectedCategory?.category}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedBelief(null)}
                    className="rounded-full hover:bg-white/50 flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 overflow-y-auto max-h-[50vh] sm:max-h-[55vh]">
                  {/* Full Description */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Description</h4>
                    <div className="prose prose-sm max-w-none">
                      {selectedBelief.fullDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed mb-4 text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Scriptures */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Scripture References</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedBelief.scriptures.map((scripture, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/20 transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
                          onClick={() => window.open(`https://www.biblegateway.com/passage/?search=${scripture}&version=NKJV`, '_blank')}
                        >
                          {scripture}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-sm text-gray-600 text-center sm:text-left">
                      Tap scripture references to view in Bible Gateway
                    </p>
                    <Button
                      onClick={() => setSelectedBelief(null)}
                      className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}