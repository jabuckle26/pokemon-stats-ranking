import React from "react";
import { allStats } from "../utils/stats";
import { allTypes } from "../utils/types";
import { QueryButton } from "./QueryButton";
import { SearchButton } from "./SearchButton";
import { DescriptionHeading } from "./DescriptionHeading";
import "bootstrap/dist/css/bootstrap.min.css";

export const QueryOptions = () => {
  const [selectedType, setSelectedType] = React.useState("");
  const [selectedStat, setSelectedStat] = React.useState("");

  const descriptionText = "Select a Pokemon type and stat to sort by!";

  return (
    <div className="queryOptions container">
      <DescriptionHeading
        classDescriptor="appDescriptor"
        descriptor={descriptionText}
      />
      <DescriptionHeading classDescriptor="appSelection" descriptor="Type" />
      <div className="container">
        {allTypes.map((theType) => {
          return (
            <QueryButton
              key={theType}
              param="type"
              selectedParam={selectedType}
              queryParam={theType}
              queryAction={setSelectedType}
            />
          );
        })}
      </div>
      <br />
      <DescriptionHeading classDescriptor="appSelection" descriptor="Stat" />
      <div className="container">
        {allStats.map((stat) => {
          return (
            <QueryButton
              key={stat}
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
