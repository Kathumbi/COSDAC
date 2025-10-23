// src/App.tsx
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Ministries from "./pages/ministries";
import MinistryDetail from "./pages/MinistryDetail";
import PrayerCells from "@/pages/PrayerCells";
import Beliefs from "./pages/Beliefs";
import EventsPage from "./pages/Events";
import ChurchBulletins from "./pages/ChurchBulletins";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/ministries/:name" element={<MinistryDetail />} />
            <Route path="/prayer-cells" element={<PrayerCells />} />
            <Route path="/beliefs" element={<Beliefs />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/church-bulletins" element={<ChurchBulletins />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;