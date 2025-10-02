import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SuccessStories from "./components/SuccessStories";
import StartupCosts from "./components/StartupCosts";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <SuccessStories />
          <StartupCosts />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
