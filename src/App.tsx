import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "./components/ui/sidebar";
import Landing from "./pages/Landing";
import About from "./pages/About";
const Journey = lazy(() => import("./pages/Journey"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Hobbies = lazy(() => import("./pages/Hobbies"));
const GalleryLazy = lazy(() => import("./pages/Gallery"));
import TopNav from "./components/TopNav";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="flex w-full app-viewport">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/portfolio" element={<Navigate to="/about" replace />} />
                <Route
                  path="/*"
                  element={
                    <>
                      <TopNav />
                      <main className="flex-1 pt-20 app-scroll-area">
                        <Suspense fallback={<div className="p-6 text-sm text-muted-foreground">Loading…</div>}>
                          <Routes>
                            <Route path="/about" element={<About />} />
                            <Route path="/education" element={<Journey />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                            {false && <Route path="/hobbies" element={<Hobbies />} />}
                            <Route path="/gallery" element={<GalleryLazy />} />
                          </Routes>
                        </Suspense>
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