import { useState } from "react";
import { TalesExample } from "./pages/talesExample";
//import BlurExample from "./pages/blurExample";
import "./index.css";
import Sidebar from "./pages/items/sidebar";
import LightRays from "./components/LightRays";
function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {/* <div className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-3xl font-bold">Scroll Down to Reveal</h1>
      </div> */}
      <div className="bg-gray-900 w-full relative">
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#ecffffff"
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
        <div className="p-4 z-10 flex flex-col min-h-screen justify-center items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            Toggle
          </button>
          {isOpen && <Sidebar />}
          <TalesExample />
          {/* <BlurExample /> */}
        </div>
      </div>
    </>
  );
}

export default App;
