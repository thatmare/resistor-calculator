const API_URL = "http://localhost:5000/api";

export function getValues(type, color) {
  return fetch(`${API_URL}/values?type=${type}&color=${color}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.value;
    })
    .catch((error) => {
      console.error("Error fetching values:", error);
    });
}
