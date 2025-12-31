import { useEffect, useState } from "react";
import { fetchTalesFromExcel, type Tale } from "../api/talesApi";
import TextType from "@/components/TextType";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

// Or use CSV version:
// import { fetchTalesFromCSV as fetchTalesFromExcel, Tale } from '../api/talesApiCSV';

export function StackExample() {
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
      className="flex flex-col justify-center items-center p-4 w-full  h-screen "
    >
      <ScrollStack
        itemDistance={0}
        itemStackDistance={2}
        rotationAmount={0}
        blurAmount={2}
        stackPosition="10%"
      >
        {tales.map((tale) => (
          <ScrollStackItem key={tale.id}>
            <h2 className="text-xl text-black font-semibold ">{tale.Title}</h2>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}
