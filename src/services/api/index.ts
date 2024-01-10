const url = `${process.env.BASE_URL}/guests/public`;

const api = {
  async put(
    code: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}/${code}`, {
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
