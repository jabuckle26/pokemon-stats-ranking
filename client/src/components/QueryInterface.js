import React, { useContext } from "react";
import { QueryOptions } from "./QueryOptions";
import { ResultsDisplay } from "./ResultsDisplay";
import { GlobalContext } from "../context/GlobalState";

export const QueryInterface = () => {
  const { results } = useContext(GlobalContext);

  return (
    <>
      <QueryOptions />
      {results.length > 0 && <ResultsDisplay results={results} />}
    </>
  );
};
