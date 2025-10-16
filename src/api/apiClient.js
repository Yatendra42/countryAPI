export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
