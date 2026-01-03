import { useEffect, useState } from "react";

export default function InfoItems() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div className="flex flex-row gap-2 fixed bottom-8 left-8 z-2 p-2  transition-colors duration-300 md:bg-transparent">
        <h1
          className={`text-md font-bold ${
            isVisible ? "text-black" : "text-white"
          }`}
        >
          Dev with{" "}
        </h1>
        <a
          href="https://reactbits.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff6b6bff]"
        >
          reactbits
        </a>
      </div>
      {/* <div className={`fixed bottom-8 left-8 z-2 `}>
        <button
          className="bg-white hover:bg-white/80 text-[#ff6b6bff] p-3 rounded-full shadow-lg transition-colors focus:outline-none"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div> */}
    </>
  );
}
