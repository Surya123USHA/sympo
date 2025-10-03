import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EventPage from "./components/light/EventPage";
import Bug from "./pages/Bug";
import DragonBallEvent from "./pages/DragonBallEvent";
import Decode from "./pages/Decode";
import Result from "./pages/Result";
import Rewind from "./pages/Rewind";
import Escp from "./pages/Escp";
import Level1 from "./pages/escp/Level1";
import Level2 from "./pages/escp/Level2";
import Level3 from "./pages/escp/Level3";
import FinalLevel from "./pages/escp/FinalLevel";
import Crack from "./pages/Crack";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/light" element={<EventPage />} />
          <Route path="/bug" element={<Bug />} />
          <Route path="/pixel" element={<DragonBallEvent />} />
          <Route path="/decode" element={<Decode />} />
          <Route path="/result" element={<Result />} />
          <Route path="/rewind" element={<Rewind />} />
          <Route path="/escp" element={<Escp />} />
          <Route path="/level-1" element={<Level1 />} />
          <Route path="/level-2" element={<Level2 />} />
          <Route path="/level-3" element={<Level3 />} />
          <Route path="/final-level" element={<FinalLevel />} />
          <Route path="/crack" element={<Crack />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
// Import the functions you need from the SDKs you need
