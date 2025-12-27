import TextType from "../components/TextType";

export function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -150; // Offset 100px dari atas agar judul section terlihat
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 w-full text-white h-screen w-screen ">
      <div className="container flex flex-col justify-center items-center z-5">
        <h1 className="text-4xl font-bold mb-4">
          Welcome!{" "}
          <TextType
            text={[
              "...",
              "The Fairy Ones",
              "The Fairy Tales",
              "to Grimm's Fairy Tales",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-[#ff6b6bff]"
          />
        </h1>
        <p className="mb-4 text-white">
          Thank you for dataset{" "}
          <span className="underline decoration-[#ff6b6bff]">
            Project Gutenberg
          </span>{" "}
          from{" "}
          <a
            href="https://www.kaggle.com/datasets/tschomacker/grimms-fairy-tales"
            target="_blank"
            className="text-[#ff6b6bff]"
          >
            Kaggle
          </a>
        </p>
        <div className="flex flex-col items-center">
          <p className="text-white/60">Down to the tales</p>
          <a
            onClick={() => handleScrollToSection("tales")}
            className="cursor-pointer"
          >
            <span className="material-symbols-outlined animate-arrow-down">
              arrow_downward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
