import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export const SearchButton = (props) => {
  const { isLoading, setIsLoading, setResults } = useContext(GlobalContext);

  const getStatsBaseURL = `/api/pokemon/statSort`;

  const handleSearchClick = async () => {
    setIsLoading(true);
    const result = await axios.get(
      `${getStatsBaseURL}?stat=${props.selectedStat.toLowerCase()}&type=${
        props.selectedType
      }`
    );
    console.log("got response");
    setResults(result.data);
    setIsLoading(false);
  };
  return (
    <Button
      variant="primary"
      onClick={() => handleSearchClick()}
      className="runQuery"
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      ) : (
        "SEARCH"
      )}
    </Button>
  );
};
