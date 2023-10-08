const BASE_URL = "http://localhost:3001/guests";

const api = {
  async put(code: string) {
    try {
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
    }
  },
};

export default api;
