import { API_ENDPOINTS } from "../config/api";

export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch(`${API_ENDPOINTS.SEND_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw error;
  }
}