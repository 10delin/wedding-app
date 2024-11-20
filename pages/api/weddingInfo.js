import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://673c907d96b8dcd5f3fa9343.mockapi.io/boda/weddingInfo"
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos" });
  }
}
