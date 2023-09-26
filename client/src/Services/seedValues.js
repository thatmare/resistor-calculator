const API_URL = "http://localhost:5000/api";

async function seedData() {
  try {
    const response = await fetch(`${API_URL}/values`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
    } else {
      console.error("Error in data seeding");
    }
  } catch (error) {
    console.error("Error in HTTP request", error);
  }
}

seedData();
