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
  ArrowLeft,
  Search,
  Phone,
  Mail,
} from "lucide-react";

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
  },
];

const PrayerCells = () => {
  const [selectedCell, setSelectedCell] = useState<PrayerCell | null>(null);
  const [joinFormOpen, setJoinFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: ""
  });
  const navigate = useNavigate();

  const filteredCells = prayerCells.filter(
    (cell) =>
      cell.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cell.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cell.coverage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleJoinCell = (cell: PrayerCell) => {
    setSelectedCell(cell);
    setJoinFormOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Join Cell Form:", { ...formData, cell: selectedCell?.name });
    alert("Thank you for your interest! The prayer cell leader will contact you soon.");
    setJoinFormOpen(false);
    setFormData({ name: "", email: "", phone: "", location: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* 🌄 Hero Section with Search */}
      <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
        <img
          src="/ImageUploads/Prayer Banner.jpg"
          alt="Prayer Cells Banner"
          className="w-full h-full object-cover brightness-75"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-105 z-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Main
          </button>

          {/* Title and Description */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
              Prayer Cells & Fellowship Groups
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-lg mb-8 max-w-3xl mx-auto">
              Join one of our prayer cells near you to experience deeper fellowship,
              discipleship, and community support.
            </p>

            {/* Search Bar Inside Hero */}
            <div className="w-full max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search by area, location, or prayer cell name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-2xl border border-white/20 bg-white/90 backdrop-blur-sm shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-lg text-gray-900 placeholder-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container py-12 md:py-20 max-w-7xl mx-auto">
        {/* Prayer Cell Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCells.map((cell, index) => (
            <Card
              key={cell.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedCell(cell)}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  {cell.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-primary" />
                    <span className="font-medium">{cell.coverage}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-primary" />
                    <span>
                      {cell.meetingDay}, {cell.meetingTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <User size={16} className="text-primary" />
                    <span>{cell.leaderName}</span>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full transition-all duration-300 hover:scale-105 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20"
                >
                  View Details & Join
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredCells.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No prayer cells found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms or contact us for assistance.
            </p>
          </div>
        )}
      </section>

      {/* 📋 Cell Details Modal */}
      <Dialog open={!!selectedCell} onOpenChange={() => setSelectedCell(null)}>
        <DialogContent className="max-w-lg bg-white rounded-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-gray-900">
              <div className="p-2 bg-primary/10 rounded-xl">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              {selectedCell?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedCell && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h4 className="font-semibold text-gray-900">Area Covered</h4>
                  <p className="text-gray-600">{selectedCell.coverage}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-gray-900">Meeting Schedule</h4>
                  <p className="text-gray-600">
                    {selectedCell.meetingDay} at {selectedCell.meetingTime}
                  </p>
                </div>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-900">Cell Leader</h4>
                <p className="text-gray-600">{selectedCell.leaderName}</p>
                <p className="text-gray-600 flex items-center gap-2">
                  <Phone size={16} />
                  {selectedCell.leaderPhone}
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <a
                  href={selectedCell.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="cta" className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2" size={18} />
                    WhatsApp Leader
                  </Button>
                </a>
                <Button 
                  variant="hero" 
                  className="flex-1 bg-primary hover:bg-primary/90"
                  onClick={() => handleJoinCell(selectedCell)}
                >
                  Join This Cell
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Join Cell Form Modal */}
      <Dialog open={joinFormOpen} onOpenChange={setJoinFormOpen}>
        <DialogContent className="max-w-md bg-white rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Join {selectedCell?.name}
            </DialogTitle>
            <p className="text-gray-600 text-sm">
              Fill out the form below and the prayer cell leader will contact you.
            </p>
          </DialogHeader>
          
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+254 700 000000"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Your Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="Enter your current location"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Any specific questions or information you'd like to share..."
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
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