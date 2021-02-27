import React, { useContext } from "react";
import { QueryOptions } from "./QueryOptions";
import { ResultsDisplay } from "./ResultsDisplay";
import { GlobalContext } from "../context/GlobalState";
import { DescriptionHeading } from "./DescriptionHeading";

export const MainDisplay = () => {
  const { results } = useContext(GlobalContext);

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
