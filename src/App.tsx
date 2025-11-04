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

// Optimized QueryClient for mobile performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Better for mobile data usage and performance
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1, // Fewer retries on mobile networks
      refetchOnWindowFocus: false, // Better for mobile UX
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* You could add a mobile detection context here if needed */}
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
            {/* Add any additional mobile-specific routes if needed */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;