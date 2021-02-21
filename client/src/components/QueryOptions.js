import React, { useContext } from "react";
import { allStats } from "../utils/stats";
import { allTypes } from "../utils/types";
import { GlobalContext } from "../context/GlobalState";
import { QueryButton } from "./QueryButton";
import axios from "axios";

export const QueryOptions = () => {
  const {
    selectedType,
    selectedStats,
    setResults,
    setSelectedStats,
    setSelectedType,
    setIsLoading,
  } = useContext(GlobalContext);

  const handleSearchClick = async () => {
    setIsLoading(true);
    const result = await axios.get(
      `/api/pokemon/statSort?stat=${selectedStats.toLowerCase()}&type=${selectedType}`
    );
    console.log("got response");
    setResults(result.data);
    setIsLoading(false);
  };

  return (
    <div className="queryOptions">
      <div className="container">
        {allTypes.map((theType) => {
          return (
            <QueryButton
              param="type"
              selectedParam={selectedType}
              queryParam={theType}
              queryAction={setSelectedType}
            />
          );
        })}
      </div>
      <br />
      <div className="container">
        {allStats.map((stat) => {
          return (
            <QueryButton
              param="stat"
              selectedParam={selectedStats}
              queryParam={stat}
              queryAction={setSelectedStats}
            />
          );
        })}
      </div>
      <p className="runQuery" onClick={() => handleSearchClick()}>
        SEARCH
      </p>
    </div>
  );
};
