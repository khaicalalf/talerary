import { useEffect, useState } from "react";
import { fetchTalesFromExcel, type Tale } from "../api/talesApi";
import ScrollReveal from "@/components/ScrollReveal";
//import GradualBlur from "@/components/GradualBlur";
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
    return <div className="p-4">Loading tales...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Grimm's Fairy Tales</h1>
      <p className="mb-4">Total tales: {tales.length}</p>

      <div className="space-y-4 flex flex-col w-full md:w-1/2 p-4 m-4">
        {tales.slice(0, 15).map((tale) => (
          <>
            <h2 className="text-xl font-semibold mb-2">
              {tale.id + 1}. {tale.Title}
            </h2>
            <div key={tale.id} className="border p-4 rounded-lg w-full ">
              <p className="text-gray-700 whitespace-pre-wrap">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={0}
                  blurStrength={5}
                >
                  {tale.Text}
                </ScrollReveal>
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
