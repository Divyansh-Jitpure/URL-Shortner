// import { useEffect, useState } from "react";
import "./App.css";
import UrlInput from "./components/UrlInput";

// const [shorl, setShorl] = useState();
// const short = async () => {
//   const response = await fetch("http://localhost:4000/api");
//   const data = await response.json();
//   setShorl(data.shurl);
// };
// useEffect(() => {
//   short();
// }, []);

function App() {
  return (
    <>
      <UrlInput />
    </>
  );
}

export default App;
