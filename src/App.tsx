import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ApartmentDetail from "@/pages/ApartmentDetail";
import Apartments from "@/pages/Apartments";
import Contact from "@/pages/Contact";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Toaster />
            <Sonner />

            <div className="flex min-h-screen flex-col bg-background text-foreground">
              <Navbar />

              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/apartments" element={<Apartments />} />
                  <Route path="/apartments/:id" element={<ApartmentDetail />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>

              <Footer />
            </div>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}