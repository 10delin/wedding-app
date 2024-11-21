import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/10delin/wedding-api/refs/heads/main/db.json"
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos" });
  }
}
