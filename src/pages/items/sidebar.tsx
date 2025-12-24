import { useEffect, useState } from "react";
import { fetchTalesFromExcel, type Tale } from "../../api/talesApi";

function Sidebar() {
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
    <div>
      <h1>sidebar</h1>
      <ul>
        {tales.map((tale) => (
          <li key={tale.id}>{tale.Title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
