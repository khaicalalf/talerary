import { useEffect, useState } from "react";
import a1 from "../../assets/items/1a.svg";
import a2 from "../../assets/items/2a.svg";
import a3 from "../../assets/items/3a.svg";
import a4 from "../../assets/items/4a.svg";
import a5 from "../../assets/items/5a.svg";

const bgItems = [
  { id: 1, img: a1, top: "10%", left: "5%" },
  { id: 2, img: a2, top: "30%", right: "8%" },
  { id: 3, img: a3, bottom: "20%", left: "10%" },
  { id: 4, img: a4, bottom: "40%", right: "15%" },
  { id: 5, img: a5, top: "60%", left: "20%" },
];

export default function BgItems() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
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
      {isVisible &&
        bgItems.map((item) => (
          <div
            key={item.id}
            className="fixed z-0 h-24 w-24 opacity-30 pointer-events-none animate-items"
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              right: item.right,
            }}
          >
            <img
              src={item.img}
              alt={`Items-${item.id}`}
              className="w-full h-full object-contain animate-items"
            />
          </div>
        ))}
    </>
  );
}
