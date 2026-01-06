import { useEffect, useState } from "react";
import { fetchTalesFromExcel, type Tale } from "../api/talesApi";
import TextType from "@/components/TextType";
import BgItems from "./items/bgItems";
import GradualBlur from "@/components/GradualBlur";
//import ScrollReveal from "@/components/ScrollReveal";
//import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

// Or use CSV version:
// import { fetchTalesFromCSV as fetchTalesFromExcel, Tale } from '../api/talesApiCSV';

export function TalesExample() {
  const [tales, setTales] = useState<Tale[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTales() {
      try {
        setLoading(true);
        const data = await fetchTalesFromExcel();
        setTales(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load tales");
      } finally {
        setLoading(false);
      }
    }

    loadTales();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-white">
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
    );
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full bg-white text-black ">
      <section
        className="flex flex-col justify-center items-center p-4 w-full sm:w-1/2 bg-white text-black "
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <div
          id="tales"
          className="tales flex flex-col w-full"
          style={{ height: "100%", overflowY: "auto" }}
        >
          {/* <AnimatedList
          items={tales}
          onItemSelect={(item, index) => console.log(item, index)}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={true}
        /> */}

          {tales.map((tale) => (
            <div
              id={`section-${tale.id}`}
              key={tale.id}
              className="w-full my-4"
            >
              {/* <ScrollStack
              itemDistance={0}
              itemStackDistance={2}
              rotationAmount={0}
              blurAmount={2}
              stackPosition="10%"
            >
              <div key={tale.id} id={`section-${tale.id}`}>
                <ScrollStackItem key={tale.id}>
                  <h2 className="text-xl text-black font-semibold ">
                    {tale.Title}
                  </h2>
                </ScrollStackItem>
                <ScrollStackItem>
                  <p>
                    <ScrollReveal
                      baseOpacity={0}
                      enableBlur={true}
                      baseRotation={0}
                      blurStrength={20}
                    >
                      {tale.Text}
                    </ScrollReveal>
                    {tale.Text.substring(0, 5000) + "..."}
                  </p>
                </ScrollStackItem>
              </div>
            </ScrollStack> */}
              <div>
                <div className="sticky top-0 bg-white/95 backdrop-blur-md z-1 p-8 -mx-0 rounded-t-lg">
                  <h2 className="text-xl font-semibold">
                    {tale.id + 1}. {tale.Title}
                  </h2>
                </div>
                <div className="px-8 pb-8">
                  <p>
                    {/* <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={0}
                    blurStrength={20}
                  >
                    {tale.Text}
                  </ScrollReveal> */}
                    {tale.Text}
                    {/* {tale.Text.substring(0, 100) + "..."} */}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <GradualBlur
            target="parent"
            position="bottom"
            height="6rem"
            strength={2}
            divCount={5}
            curve="bezier"
            zIndex={2}
            exponential={true}
            opacity={1}
          />
        </div>
      </section>
      <BgItems />
    </div>
  );
}
