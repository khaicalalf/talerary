import * as XLSX from "xlsx";

export interface Tale {
  id: number;
  Title: string;
  Text: string;
}

/**
 * Fetch and parse tales from the Excel file in public/tales
 * @param filename - Name of the file (e.g., 'grimms_fairytales.xls')
 * @returns Promise with array of Tale objects
 */
export async function fetchTalesFromExcel(
  filename: string = "grimms_fairytales.xls"
): Promise<Tale[]> {
  try {
    // Fetch the file from public folder
    const response = await fetch(`/tales/${filename}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

    // Get the file as array buffer
    const arrayBuffer = await response.arrayBuffer();

    // Parse the workbook with proper encoding
    const workbook = XLSX.read(arrayBuffer, {
      type: "array",
      raw: false,
      codepage: 65001, // UTF-8 encoding
    });

    // Get the first sheet
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert to JSON
    const jsonData = XLSX.utils.sheet_to_json<Tale>(worksheet);

    // Convert id to number if it's a string
    return jsonData.map((tale) => ({
      ...tale,
      id: typeof tale.id === "string" ? parseInt(tale.id, 10) : tale.id,
      Title: tale.Title || "",
      Text: tale.Text || "",
    }));
  } catch (error) {
    console.error("Error fetching tales:", error);
    throw error;
  }
}

/**
 * Get a single tale by ID
 */
export async function getTaleById(
  id: number,
  filename?: string
): Promise<Tale | undefined> {
  const tales = await fetchTalesFromExcel(filename);
  return tales.find((tale) => tale.id === id);
}

/**
 * Search tales by title
 */
export async function searchTalesByTitle(
  query: string,
  filename?: string
): Promise<Tale[]> {
  const tales = await fetchTalesFromExcel(filename);
  const lowerQuery = query.toLowerCase();
  return tales.filter((tale) => tale.Title.toLowerCase().includes(lowerQuery));
}
