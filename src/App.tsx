// src/App.tsx
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Ministries from "./pages/ministries";           // Ministries list page
import MinistryDetail from "./pages/MinistryDetail";   // Ministry detail page
import PrayerCells from "@/pages/PrayerCells";
import Beliefs from "./pages/Beliefs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Index />} />

          {/* Ministries pages */}
          <Route path="/ministries" element={<Ministries />} />             {/* List */}
          <Route path="/ministries/:name" element={<MinistryDetail />} />   {/* Detail */}
          <Route path="/prayer-cells" element={<PrayerCells />} />  {/* ✅ NEW PAGE */}
          <Route path="/beliefs" element={<Beliefs />} />  {/* ✅ NEW PAGE */}

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
