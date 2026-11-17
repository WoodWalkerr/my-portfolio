import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyMotion, MotionConfig } from "framer-motion";
import Home from "./pages/Home";
import Background from "./components/ui/Background";
import ScrollProgress from "./components/ui/ScrollProgress";

// Animation features load in parallel with first paint instead of blocking it
const loadMotionFeatures = () => import("./motionFeatures").then((mod) => mod.default);

// The full projects page is only downloaded when someone visits it
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));

function App() {
  return (
    <LazyMotion features={loadMotionFeatures}>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Background />
          <ScrollProgress />
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
