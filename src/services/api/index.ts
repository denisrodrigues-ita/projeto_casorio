const BASE_URL = "http://localhost:3001/guests";

const api = {
  async put(
    code: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/${code}`, {
        method: "PUT",
        body: JSON.stringify({ attendance_status: true }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      return { response, result };
    } catch (error) {
      return {};
    } finally {
      setIsLoading(false);
    }
  },
};

export default api;
