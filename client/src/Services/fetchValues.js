async function getValues(type, color) {
  try {
    const response = await fetch(
      `http://localhost:5000/api/values?type=${type}&color=${color}`
    );
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.log(error);
  }
}
