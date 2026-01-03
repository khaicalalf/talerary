import GradualBlur from "@/components/GradualBlur";
//import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useState } from "react";
import { fetchTalesFromExcel, type Tale } from "../api/talesApi";

function BlurExample() {
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
    <>
      <section
        className="flex justify-center items-center w-full h-screen"
        style={{ position: "relative", height: "90vh", overflow: "hidden" }}
      >
        <div
          className="space-y-4 flex flex-col w-full md:w-1/2 p-4 m-4"
          style={{ height: "100%", overflowY: "auto", padding: "6rem 2rem" }}
        >
          {/* <p>Haikal</p>
          <div>
          <p>Haikal div</p>
          <img
            src="https://plus.unsplash.com/premium_photo-1669839774770-df5a3d2da257?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Haikal"
            style={{ width: "100%", height: "auto" }}
          />
          </div>
          <p>Haikal last</p> */}
          {tales.map((tale) => (
            <>
              <div>
                <div className="sticky top-0 bg-white/95 backdrop-blur-md z-10 p-8 -mx-0 rounded-t-lg">
                  <h2 className="text-xl font-semibold">
                    {tale.id + 1}. {tale.Title}
                  </h2>
                </div>
                <div id={`section-${tale.id}`} className="px-8 pb-8">
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
            </>
          ))}
        </div>

        <GradualBlur
          target="parent"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </section>
    </>
  );
}

export default BlurExample;
