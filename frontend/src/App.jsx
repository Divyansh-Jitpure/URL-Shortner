import { useState } from "react";
import "./App.css";

function App() {
  const [shorl, setShorl] = useState(null);

  const fetchShortUrl = async () => {
    const response = await fetch("http://localhost:4000/api");
    const data = await response.json();
    setShorl(data.msg);
  };

  fetchShortUrl();

  return (
    <>
      <p>
        Shortened URL: <a href={shorl}>{shorl}</a>
      </p>
    </>
  );
}

export default App;
