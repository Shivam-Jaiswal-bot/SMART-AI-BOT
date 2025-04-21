import { prevUser } from "./context/UserContext";

export async function query() {
  const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY; // Access Vite environment variable
  const response = await fetch(
    "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ "inputs": prevUser.prompt }),
    }
  );
  const result = await response.blob();
  return result;
}
