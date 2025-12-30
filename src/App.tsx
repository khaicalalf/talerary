import { TalesExample } from "./pages/talesExample";
import { Hero } from "./pages/hero";
//import BlurExample from "./pages/blurExample";
import "./index.css";
import Sidebar from "./pages/items/sidebar";
import LightRays from "./components/LightRays";
import ScrollToTop from "./pages/items/scrollToTop";

function App() {
  return (
    <>
      {/* <div className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-3xl font-bold">Scroll Down to Reveal</h1>
      </div> */}

      <div className="bg-black w-full">
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
        <Hero />
        <Sidebar />
        <div className="pt-10 flex gap-8 min-h-screen justify-center items-center">
          <TalesExample />
        </div>
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
