import { useEffect, useState } from "react";
import { fetchTalesFromExcel, type Tale } from "../../api/talesApi";
import StaggeredMenu from "../../components/StaggeredMenu";

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

  // const menuItems = [
  //   { label: "Home", ariaLabel: "Go to home page", link: "https://google.com" },
  //   { label: "About", ariaLabel: "Learn about us", link: "https://google.com" },
  //   {
  //     label: "Services",
  //     ariaLabel: "View our services",
  //     link: "https://google.com",
  //   },
  //   { label: "Contact", ariaLabel: "Get in touch", link: "https://google.com" },
  // ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

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
    <div className="text-white">
      <StaggeredMenu
        position="left"
        items={tales.map((tale) => ({
          label: tale.Title,
          ariaLabel: tale.Title,
          onClick: () => handleScrollToSection(`section-${tale.id}`),
        }))}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#ff6b6bff"
        openMenuButtonColor="#ff6b6bff"
        changeMenuColorOnOpen={true}
        colors={["#cc4b4bff", "#e79696ff"]}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#ff6b6bff"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
        isFixed={true}
      />
    </div>
  );
}

export default Sidebar;
