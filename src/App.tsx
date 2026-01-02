import { lazy, Suspense } from "react";
import { useState, useEffect } from "react";
import "./index.css";
import SplashScreen from "./pages/items/SplashScreen";
import { Hero } from "./pages/hero";
import { TalesExample } from "./pages/talesExample";

// Lazy load components

const Sidebar = lazy(() => import("./pages/items/sidebar"));
const LightRays = lazy(() => import("./components/LightRays"));
const ScrollToTop = lazy(() => import("./pages/items/scrollToTop"));
const InfoItems = lazy(() => import("./pages/items/infoItems"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <SplashScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <div className="bg-white w-full">
        {isVisible && (
          <div
            className="hidden sm:block"
            style={{
              width: "100%",
              height: "80vh",
              position: "absolute",
            }}
          >
            <LightRays
              raysOrigin="top-center"
              raysColor="#ff6b6bff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>
        )}
        <Hero />
        <Sidebar />
        <div className="pt-10 flex gap-8 min-h-screen justify-center items-center">
          <TalesExample />
        </div>
        <ScrollToTop />
        <InfoItems />
      </div>
    </Suspense>
  );
}

export default App;
