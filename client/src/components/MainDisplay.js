import React, { useContext, useEffect } from "react";
import { QueryOptions } from "./QueryOptions";
import { ResultsDisplay } from "./ResultsDisplay";
import { GlobalContext } from "../context/GlobalState";

export const MainDisplay = () => {
  const { results } = useContext(GlobalContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [results]);

  return (
    <body>
      {results.length === 0 ? (
        <>
          <QueryOptions />
        </>
      ) : (
        <ResultsDisplay results={results} />
      )}
    </body>
  );
};
