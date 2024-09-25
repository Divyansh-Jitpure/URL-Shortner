import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

app.get("/api", async (req, res) => {
  const {
    query: { url },
  } = req;

  try {
    const apiurl = await fetch(`https://ulvis.net/API/write/get?url=${url}`);
    const data = await apiurl.json(); // Assuming the API returns JSON
    const shurl = data.data.url; // Extract the short URL from the API response

    res.send({ shurl });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error fetching shortened URL");
  }
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
