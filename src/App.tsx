import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "./components/ui/sidebar";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AppSidebar from "./components/AppSidebar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/portfolio" element={<Navigate to="/about" replace />} />
                <Route
                  path="/*"
                  element={
                    <>
                      <AppSidebar />
                      <main className="flex-1">
                        <Routes>
                          <Route path="/about" element={<About />} />
                          <Route path="/education" element={<Journey />} />
                          <Route path="/skills" element={<Skills />} />
                          <Route path="/projects" element={<Projects />} />
                          <Route path="/contact" element={<Contact />} />
                        </Routes>
                      </main>
                    </>
                  }
                />
              </Routes>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;