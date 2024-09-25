import { useState } from "react";
import "./App.css";

function App() {
  const [inputUrl, setInputUrl] = useState("");

  const handleInput = (e) => {
    setInputUrl(e.target.value);
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="my-2 text-4xl font-bold">URL Shortner</h1>
      <div className="my-2">
        <label className="text-2xl" htmlFor="urlInput">
          Enter URL
        </label>
        <input
          onChange={handleInput}
          value={inputUrl}
          className="ml-2 rounded-md border-2 border-black"
          type="text"
        />
      </div>
      <div className="">
        Shortened URL: <span></span>
      </div>
    </main>
  );
}

export default App;
