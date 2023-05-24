import { useEffect, useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
        try {
          const timestamp = Date.now();
          const response = await fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent(
              `https://ultima.rest/api/random?timestamp=${timestamp}`
            )}`
          );
          if (response.ok) {
            const data = await response.json();
            const parsedData = JSON.parse(data.contents);
            const quoteText = parsedData.quote;
            const characterText = parsedData.character;
            setQuote(quoteText);
            setCharacter(`- ${characterText}`);
            localStorage.setItem("quote", quoteText);
          } else {
            throw new Error("Network response was not ok.");
          }
        } catch (error) {
          console.error("Error fetching quote:", error);
        }
    };

    fetchQuote();
  }, []);

  return (
    <>
      <h1>{quote}</h1>
      <p>{character}</p>
    </>
  );
};

export default Quotes;
