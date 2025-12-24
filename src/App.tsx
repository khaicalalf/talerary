import { useState } from "react";
import { TalesExample } from "./pages/talesExample";
//import BlurExample from "./pages/blurExample";
import "./index.css";
import Sidebar from "./pages/items/sidebar";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {/* <div className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-3xl font-bold">Scroll Down to Reveal</h1>
      </div> */}
      <div className="flex flex-col min-h-screen justify-center items-center">
        <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        {isOpen && <Sidebar />}
        <TalesExample />
        {/* <BlurExample /> */}
      </div>
    </>
  );
}

export default App;
