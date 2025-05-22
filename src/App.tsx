
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTransition from "./components/PageTransition";

import Index from "./pages/Index";
import CircuitsList from "./pages/CircuitsList";
import CircuitDetail from "./pages/CircuitDetail";
import Reservation from "./pages/Reservation";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/circuits" element={<CircuitsList />} />
            <Route path="/circuits/:id" element={<CircuitDetail />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/paiement" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
