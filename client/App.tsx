import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuddyCommunity from "./pages/BuddyCommunity";
import CommunityProof from "./pages/CommunityProof";
import DashboardInsights from "./pages/DashboardInsights";
import EventDiscovery from "./pages/EventDiscovery";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PersonaDemo from "./pages/PersonaDemo";
import ProfileSettings from "./pages/ProfileSettings";
import ProfileSettingsCopy from "./pages/ProfileSettingsCopy";
import YourFlowNation from "./pages/YourFlowNation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/discover" element={<EventDiscovery />} />
          <Route path="/community" element={<BuddyCommunity />} />
          <Route path="/dashboard" element={<DashboardInsights />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/profile/theme" element={<ProfileSettingsCopy />} />
          <Route path="/community-proof" element={<CommunityProof />} />
          <Route path="/persona" element={<PersonaDemo />} />
          <Route path="/your-flownation" element={<YourFlowNation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
