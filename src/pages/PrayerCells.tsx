import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    name: "Cell #87 - Uthiru",
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
    name: "Cell #22 - Kangemi",
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
    name: "Cell #10 - Naivasha Road",
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
    name: "Cell #45 - Westlands",
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
    name: "Cell #63 - Gikambura",
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
    name: "Cell #29 - Kiuru",
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
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredCells = prayerCells.filter(
    (cell) =>
      cell.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cell.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* 🖼️ Banner Image with Overlay and Back Button */}
<div className="relative w-full h-64 md:h-80 mb-12 rounded-2xl overflow-hidden shadow-md animate-fade-in">
  <img
    src="/Image uploads/Prayer Banner.jpg"
    alt="Prayer Cells Banner"
    className="w-full h-full object-cover"
  />

  {/* 🕊️ Overlay */}
  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
    {/* 🔙 Back Button (top-left corner) */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Main
          </button>

          {/* 🕊️ Title + Description */}
          <div className="flex flex-col items-center justify-center mt-6 md:mt-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
              Prayer Cells & Fellowship Groups
            </h2>
            <p className="text-gray-100 max-w-2xl mx-auto text-lg">
              Join one of our prayer cells near you to experience deeper fellowship,
              discipleship, and community support.
            </p>
          </div>
        </div>
      </div>



        {/* 🔍 Search */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Find a prayer cell near me..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />
        </div>

        {/* 🗺️ Prayer Cell Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCells.map((cell, index) => (
            <Card
              key={cell.id}
              className="hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer bg-white"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedCell(cell)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                  <MapPin className="text-primary" size={20} />
                  {cell.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{cell.coverage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>
                      {cell.meetingDay}, {cell.meetingTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{cell.leaderName}</span>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full mt-4 transition-transform duration-300 hover:scale-105"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 📋 Cell Details Modal */}
        <Dialog open={!!selectedCell} onOpenChange={() => setSelectedCell(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                <MapPin className="text-primary" />
                {selectedCell?.name}
              </DialogTitle>
            </DialogHeader>
            {selectedCell && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <h4 className="font-semibold mb-1">Area Covered</h4>
                  <p className="text-gray-600">{selectedCell.coverage}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Meeting Schedule</h4>
                  <p className="text-gray-600">
                    {selectedCell.meetingDay} at {selectedCell.meetingTime}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cell Leader</h4>
                  <p className="text-gray-600">{selectedCell.leaderName}</p>
                  <p className="text-gray-600">{selectedCell.leaderPhone}</p>
                </div>
                <div className="flex gap-3 pt-4">
                  <a
                    href={selectedCell.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="cta" className="w-full">
                      <MessageCircle className="mr-2" size={18} />
                      WhatsApp Leader
                    </Button>
                  </a>
                  <Button variant="hero" className="flex-1">
                    Join This Cell
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default PrayerCells;
