import React, { useContext } from "react";
import { QueryOptions } from "./QueryOptions";
import { ResultsDisplay } from "./ResultsDisplay";
import { GlobalContext } from "../context/GlobalState";

export const QueryInterface = () => {
  const { results } = useContext(GlobalContext);

  return (
    <>
      {results.length === 0 ? (
        <QueryOptions />
      ) : (
        <ResultsDisplay results={results} />
      )}
    </>
  );
};
