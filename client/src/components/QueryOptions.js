import React, { useContext } from "react";
import { allStats } from "../utils/stats";
import { allTypes } from "../utils/types";
import { QueryButton } from "./QueryButton";
import { SearchButton } from "./SearchButton";
import "bootstrap/dist/css/bootstrap.min.css";

export const QueryOptions = () => {
  const [selectedType, setSelectedType] = React.useState("");
  const [selectedStat, setSelectedStat] = React.useState("");

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
              selectedParam={selectedStat}
              queryParam={stat}
              queryAction={setSelectedStat}
            />
          );
        })}
      </div>
      <SearchButton selectedType={selectedType} selectedStat={selectedStat} />
    </div>
  );
};
