import { useEffect, useState } from "react";
import "../../SplashScreen.css";
import TextType from "../../components/TextType";

interface SplashScreenProps {
  onLoadingComplete: () => void;
  minDisplayTime?: number;
}

const SplashScreen: React.FC<SplashScreenProps> = ({
  onLoadingComplete,
  minDisplayTime = 2000,
}) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 1500); // Wait for fade out animation
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, minDisplayTime]);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="splash-content">
        <div className="splash-subtitle">
          <TextType
            text={[
              "...",
              "Grab The Fairy Ones",
              "Collect The Fairy Tales",
              "Read Grimm's Fairy Tales",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-[#ff6b6bff]"
          />
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
      <div className="splash-rays">
        <div className="ray ray-1"></div>
        <div className="ray ray-2"></div>
        <div className="ray ray-3"></div>
        <div className="ray ray-4"></div>
        <div className="ray ray-5"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
