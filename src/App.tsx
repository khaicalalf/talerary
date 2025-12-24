import { TalesExample } from "./pages/talesExample";
import "./index.css";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-3xl font-bold">Scroll Down to Reveal</h1>
      </div>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <TalesExample />
      </div>
    </>
  );
}

export default App;
