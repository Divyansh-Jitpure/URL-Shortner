import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Import Helmet for SEO
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "sonner";
import Footer from "./components/Footer";

function App() {
  const [inputUrl, setInputUrl] = useState("");
  const [shurl, setShurl] = useState();
  const [renderOutput, setRenderOutput] = useState(false);

  const handleInput = (e) => {
    setInputUrl(e.target.value);
  };

  const urlErr = () => toast.error("Please Enter a URL");
  const shurlCopied = () => toast.success("Copied Shortened URL");

  const short = async () => {
    if (inputUrl !== "") {
      const fetchPromise = new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(
            `http://localhost:4000/api?url=${inputUrl}`,
          );
          const data = await response.json();
          setShurl(data.shurl);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });

      toast.promise(fetchPromise, {
        loading: "Loading...",
        success: "Short URL has been generated",
        error: "Failed to fetch the short URL.",
      });

      try {
        await fetchPromise; // Wait for the promise to resolve or reject
      } finally {
        setRenderOutput(true);
      }
    }
  };

  const submitUrl = () => {
    short();
    if (inputUrl === "") {
      urlErr();
    }
  };

  const onCopyText = () => {
    shurlCopied();
  };

  return (
    <HelmetProvider>
      <main className="grid min-h-[100dvh] grid-rows-[1fr_auto_auto] bg-[#EEEEEE]">
        {/* SEO Tags with Helmet */}
        <Helmet>
          <title>ShoRL: A URL Shortener</title>
          <meta
            name="description"
            content="ShoRL is a simple URL shortener to quickly and easily shorten your long links."
          />
          <meta
            name="keywords"
            content="URL shortener, ShoRL, short links, link shortening"
          />
          <meta property="og:title" content="ShoRL: A URL Shortener" />
          <meta
            property="og:description"
            content="ShoRL is a simple and efficient tool to shorten URLs."
          />
          <meta property="og:url" content="https://yourwebsite.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://yourwebsite.com/og-image.jpg"
          />
          <link rel="canonical" href="https://yourwebsite.com" />
        </Helmet>

        <section className="flex flex-col items-center">
          <h1 className="mt-32 text-4xl font-bold text-[#393E46]">
            <span className="text-[#00ADB5]">ShoRL </span>:
            <span className="text-[#00ADB5]">:</span> A URL Shortener
          </h1>
          <div className="mt-14 flex items-center">
            <label className="text-2xl" htmlFor="urlInput">
              Enter URL:
            </label>
            <input
              onChange={handleInput}
              id="urlInput"
              value={inputUrl}
              placeholder="Ex. https://divyansh-jitpure.web.app/"
              className="ml-2 w-[350px] rounded-md border-2 border-black px-2 py-1 text-[#00ADB5]"
              type="text"
            />
          </div>
          <button
            className="my-4 rounded-md border-2 border-black px-3 py-1 text-lg font-bold transition-all hover:bg-[#00ADB5]"
            onClick={submitUrl}
          >
            Submit
          </button>
          {renderOutput && (
            <div className="my-3 text-xl">
              Shortened URL :
              <CopyToClipboard text={shurl} onCopy={onCopyText}>
                <span className="mx-2 cursor-pointer rounded-lg border-b-2 border-[#393E46] px-2 py-1 text-[#00d4df] hover:text-[#00ADB5]">
                  {shurl}
                </span>
              </CopyToClipboard>
              <span className="font-mono text-base tracking-tighter text-gray-400">
                (Click To Copy)
              </span>
            </div>
          )}
        </section>
        <Footer />
        <Toaster richColors />
      </main>
    </HelmetProvider>
  );
}

export default App;
