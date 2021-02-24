import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ResultEntry } from "./ResultEntry";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";

const tableHeadings = [
  "Rank",
  "NatDex #",
  "Pokemon",
  "Type",
  "HP",
  "Attack",
  "Defence",
  "Sp. Attack",
  "Sp. Defence",
  "Speed",
  "Total",
];

export const ResultsDisplay = (props) => {
  const { isLoading } = useContext(GlobalContext);
  const { results } = props;

  const getRank = (result) => {
    const rank =
      results.map((singleResult) => singleResult.name).indexOf(result.name) + 1;
    return rank;
  };

  React.useEffect(() => {
    console.log("In RESULTS DISPLAY use effect");
    console.log(results);
  }, [results]);

  return (
    <div className="resultsDisplay">
      {!isLoading ? (
        <Table responsive striped>
          <thead>
            <tr>
              {tableHeadings.map((heading) => (
                <th key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((result) => {
              return <ResultEntry rank={getRank(result)} result={result} />;
            })}
          </tbody>
        </Table>
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </div>
  );
};
