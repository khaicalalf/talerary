import { useEffect, useState } from "react";
import { fetchTalesFromExcel, type Tale } from "../api/talesApi";
import ScrollReveal from "@/components/ScrollReveal";
import TextType from "@/components/TextType";

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
    <div
      id="tales"
      className="flex flex-col justify-center items-center p-4 w-full text-white "
    >
      <div className="flex flex-col w-full md:w-1/2">
        {tales.slice(0, 16).map((tale) => (
          <>
            <div
              className="p-8 rounded rounded-lg w-full shadow shadow-md shadow-[#ff6b6bff]/40 my-4"
              style={{
                height: "100%",
                overflowY: "auto",
              }}
            >
              <h2 className="text-xl text-white font-semibold ">
                {tale.id + 1}. {tale.Title}
              </h2>
              <div key={tale.id} id={`section-${tale.id}`} className="m-4">
                <p>
                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={0}
                    blurStrength={20}
                  >
                    {tale.Text}
                  </ScrollReveal>
                  {/* {tale.Text}.substring(0, 100) + "..."; */}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
