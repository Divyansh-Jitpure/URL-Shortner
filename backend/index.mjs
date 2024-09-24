import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", async (req, res) => {
  const apiurl = await fetch(
    "https://ulvis.net/API/write/get?url=https://www.youtube.com/watch?v=fgahxcqfyJ4&list=PLMQwtTz2aDBOy5LBSbihi3Ews_01KaobY&index=5"
  );
  const data = await response.json(); // Assuming the API returns JSON
  const shurl = data.url; // Extract the short URL from the API response

  res.send(shurl);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
