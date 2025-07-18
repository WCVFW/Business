import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Travel from "./pages/services/Travel";
import BikeRides from "./pages/services/BikeRides";
import Hotels from "./pages/services/Hotels";
import Food from "./pages/services/Food";
import HairSalon from "./pages/services/HairSalon";
import WomensCare from "./pages/services/WomensCare";
import Medical from "./pages/services/Medical";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/travel" element={<Travel />} />
            <Route path="/services/bike-rides" element={<BikeRides />} />
            <Route path="/services/hotels" element={<Hotels />} />
            <Route path="/services/food-&-dining" element={<Food />} />
            <Route path="/services/hair-salon" element={<HairSalon />} />
            <Route path="/services/women's-care" element={<WomensCare />} />
            <Route path="/services/medical" element={<Medical />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
