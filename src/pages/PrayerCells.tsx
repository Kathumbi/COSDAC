import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  MapPin,
  Clock,
  User,
  MessageCircle,
  Search,
  Phone,
  Calendar,
  Users,
  X,
  Filter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface PrayerCell {
  id: string;
  name: string;
  area: string;
  coverage: string;
  meetingDay: string;
  meetingTime: string;
  leaderName: string;
  leaderPhone: string;
  whatsappLink: string;
  category: string;
  featured?: boolean;
}

const prayerCells: PrayerCell[] = [
  {
    id: "87",
    name: "Uthiru Prayer Cell",
    area: "Uthiru",
    coverage: "Uthiru-87",
    meetingDay: "Friday",
    meetingTime: "6:00 PM",
    leaderName: "John Kamau",
    leaderPhone: "+254 706 381 588",
    whatsappLink: "https://wa.me/254706381588",
    category: "central",
    featured: true
  },
  {
    id: "22",
    name: "Kangemi Prayer Cell",
    area: "Kangemi",
    coverage: "Kangemi Market to Mountain View",
    meetingDay: "Thursday",
    meetingTime: "7:00 PM",
    leaderName: "Grace Wanjiru",
    leaderPhone: "+254 706 381 588",
    whatsappLink: "https://wa.me/254706381588",
    category: "west"
  },
  {
    id: "10",
    name: "Naivasha Road Prayer Cell",
    area: "Naivasha Road",
    coverage: "Naivasha Road - Parklands Area",
    meetingDay: "Wednesday",
    meetingTime: "6:30 PM",
    leaderName: "David Omondi",
    leaderPhone: "+254 706 381 588",
    whatsappLink: "https://wa.me/254706381588",
    category: "north",
    featured: true
  },
  {
    id: "45",
    name: "Westlands Prayer Cell",
    area: "Westlands",
    coverage: "Westlands - Parklands - Highridge",
    meetingDay: "Saturday",
    meetingTime: "4:00 PM",
    leaderName: "Mary Njeri",
    leaderPhone: "+254 706 381 588",
    whatsappLink: "https://wa.me/254706381588",
    category: "west"
  },
  {
    id: "63",
    name: "Gikambura Prayer Cell",
    area: "Kilimani",
    coverage: "Gikambura-Kikuyu",
    meetingDay: "Friday",
    meetingTime: "7:00 PM",
    leaderName: "Peter Mwangi",
    leaderPhone: "+254 706 381 588",
    whatsappLink: "https://wa.me/254706381588",
    category: "south"
  },
  {
    id: "29",
    name: "Kiuru Prayer Cell",
    area: "Eastlands",
    coverage: "Kiuru-dagoretti",
    meetingDay: "Thursday",
    meetingTime: "6:00 PM",
    leaderName: "Sarah Akinyi",
    leaderPhone: "+254 706 381 588",
    whatsappLink: "https://wa.me/254706381588",
    category: "east"
  },
];

const categoryColors = {
  central: "bg-blue-100 text-blue-800 border-blue-200",
  west: "bg-green-100 text-green-800 border-green-200",
  north: "bg-orange-100 text-orange-800 border-orange-200",
  east: "bg-purple-100 text-purple-800 border-purple-200",
  south: "bg-pink-100 text-pink-800 border-pink-200",
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const PrayerCells = () => {
  const [selectedCell, setSelectedCell] = useState<PrayerCell | null>(null);
  const [joinFormOpen, setJoinFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: ""
  });
  const navigate = useNavigate();

  const categories = ["all", "central", "west", "north", "east", "south"];

  const filteredCells = prayerCells.filter((cell) => {
    const matchesSearch = cell.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cell.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cell.coverage.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || cell.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredCells = prayerCells.filter(cell => cell.featured);

  const handleJoinCell = (cell: PrayerCell) => {
    setSelectedCell(cell);
    setJoinFormOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Join Cell Form:", { ...formData, cell: selectedCell?.name });
    alert("Thank you for your interest! The prayer cell leader will contact you soon.");
    setJoinFormOpen(false);
    setFormData({ name: "", email: "", phone: "", location: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header with Integrated Search */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Title and Search Section */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-display"
            >
              Prayer Cells & Fellowship
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8"
            >
              Join one of our prayer cells near you to experience deeper fellowship, discipleship, and community support.
            </motion.p>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 z-10" />
              <Input
                type="text"
                placeholder="Search prayer cells by name, area, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-base border-2 border-white/30 bg-white text-gray-900 placeholder-gray-500 focus:border-white focus:bg-white/95 focus:ring-2 focus:ring-white/50 transition-all duration-300 rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Category Filters 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <Filter className="w-5 h-5 text-gray-500 mt-2" />
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Search Results Info 
        {(searchTerm || activeCategory !== "all") && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 bg-white rounded-lg p-4 shadow-sm max-w-2xl mx-auto"
          >
            <p className="text-gray-700">
              Showing {filteredCells.length} prayer cell{filteredCells.length !== 1 ? 's' : ''}
              {searchTerm && ` matching "${searchTerm}"`}
              {activeCategory !== "all" && ` in ${activeCategory}`}
            </p>
            {(searchTerm || activeCategory !== "all") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="text-primary hover:text-primary/80 underline text-sm mt-2 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </motion.div>
        )} */}

        {/* Featured Prayer Cells 
        {featuredCells.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">
              Featured Prayer Cells
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {featuredCells.map((cell) => (
                <motion.div
                  key={cell.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className="bg-gradient-to-br from-white to-blue-50/50 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedCell(cell)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-primary text-white px-3 py-1">
                          Featured
                        </Badge>
                        <Badge className={`${categoryColors[cell.category as keyof typeof categoryColors]} px-3 py-1`}>
                          {cell.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mt-3">
                        {cell.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-medium">{cell.coverage}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{cell.meetingDay}, {cell.meetingTime}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <User className="w-4 h-4 text-primary" />
                        <span>{cell.leaderName}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )} */}

        {/* All Prayer Cells */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">
            All Prayer Cells
          </h2>

          <AnimatePresence mode="wait">
            {filteredCells.length > 0 ? (
              <motion.div
                key="cells-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                {filteredCells.map((cell) => (
                  <motion.div
                    key={cell.id}
                    variants={itemVariants}
                    layout
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className="bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full"
                      onClick={() => setSelectedCell(cell)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <Badge className={`${categoryColors[cell.category as keyof typeof categoryColors]} px-3 py-1`}>
                            {cell.category}
                          </Badge>
                          {cell.featured && (
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 px-2 py-1 text-xs">
                              ★ Featured
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                          {cell.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm line-clamp-1">{cell.coverage}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{cell.meetingDay}, {cell.meetingTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <User className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm line-clamp-1">{cell.leaderName}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-16"
              >
                <Users className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No prayer cells found
                </h3>
                <p className="text-gray-500 mb-6">
                  {searchTerm || activeCategory !== "all" 
                    ? "Try adjusting your search or filter criteria"
                    : "Check back soon for new prayer cells"
                  }
                </p>
                {(searchTerm || activeCategory !== "all") && (
                  <Button
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("all");
                    }}
                    variant="outline"
                  >
                    Clear filters
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </div>

      {/* Prayer Cell Detail Modal */}
      <AnimatePresence>
        {selectedCell && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCell(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl w-full max-w-md mx-auto relative shadow-2xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
                <button
                  onClick={() => setSelectedCell(null)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-white/20 text-white border-none">
                    {selectedCell.category}
                  </Badge>
                  {selectedCell.featured && (
                    <Badge className="bg-yellow-400 text-yellow-900 border-none">
                      Featured
                    </Badge>
                  )}
                </div>
                <h2 className="text-xl font-bold pr-10">{selectedCell.name}</h2>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">{selectedCell.coverage}</p>
                      <p className="text-sm text-gray-600">Area Coverage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">{selectedCell.meetingDay} at {selectedCell.meetingTime}</p>
                      <p className="text-sm text-gray-600">Meeting Schedule</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
                    <User className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">{selectedCell.leaderName}</p>
                      <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                        <Phone size={14} className="flex-shrink-0" />
                        {selectedCell.leaderPhone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-3">
                 {/* <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => setSelectedCell(null)}
                  >
                    Close Details
                  </Button>*/}
                  <a
                    href={selectedCell.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <MessageCircle className="mr-2 w-4 h-4" />
                      WhatsApp Leader
                    </Button>
                  </a>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleJoinCell(selectedCell)}
                  >
                    Join This Cell
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Join Cell Form Modal */}
      <Dialog open={joinFormOpen} onOpenChange={setJoinFormOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-md bg-white rounded-2xl mx-2 sm:mx-0">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">
              Join {selectedCell?.name}
            </DialogTitle>
            <p className="text-gray-600 text-sm">
              Fill out the form below and the prayer cell leader will contact you.
            </p>
          </DialogHeader>
          
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter your full name"
                required
                className="text-sm h-10"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                  className="text-sm h-10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+254 700 000000"
                  required
                  className="text-sm h-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm">Your Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="Enter your current location"
                required
                className="text-sm h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm">Message (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Any specific questions or information you'd like to share..."
                rows={3}
                className="text-sm resize-vertical min-h-[80px]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setJoinFormOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Submit Request
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PrayerCells;