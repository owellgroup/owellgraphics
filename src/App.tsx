import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/WebDevelopment";
import GraphicDesign from "./pages/GraphicDesign";
import SystemDesign from "./pages/SystemDesign";
import Hosting from "./pages/Hosting";
import ITSupport from "./pages/ITSupport";
import OurWork from "./pages/OurWork";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/system-design" element={<SystemDesign />} />
          <Route path="/services/hosting" element={<Hosting />} />
          <Route path="/services/it-support" element={<ITSupport />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
