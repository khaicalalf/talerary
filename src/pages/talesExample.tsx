import { useEffect, useState } from "react";
import { fetchTalesFromExcel, type Tale } from "../api/talesApi";
import ScrollReveal from "@/components/ScrollReveal";

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
    return <div className="p-4 text-white">Loading tales...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="sticky top-30 flex flex-col justify-center items-center p-4 m-4 w-full text-white ">
      <div className="flex flex-col w-full md:w-1/2">
        {tales.slice(0, 16).map((tale) => (
          <>
            <div
              className="p-8 rounded-lg w-full shadow shadow-md shadow-gray-800 my-4"
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
