import React from "react";

export const QueryButton = (props) => {
  const { param, selectedParam, queryParam, queryAction } = props;
  const getButtonStyle = () => {
    if (param === "type") {
      return `typeButton ${queryParam.toLowerCase()} ${
        selectedParam === queryParam ? "selected" : ""
      } `;
    } else if (param === "stat") {
      return `statQuery ${selectedParam === queryParam ? "selected" : ""}`;
    }

    let classNames =
      param === "type"
        ? `typeButton ${queryParam.toLowerCase()}`
        : `statQuery ${queryParam}`;
    if (selectedParam === queryParam) {
      classNames += "selected";
    }

    return classNames;
  };

  const handleButtonClick = (buttonTextContent) => {
    const textContentToSet =
      selectedParam === buttonTextContent ? "" : buttonTextContent;
    queryAction(textContentToSet);
  };

  return (
    <p
      className={getButtonStyle()}
      onClick={(e) => handleButtonClick(e.target.textContent)}
    >
      {queryParam}
    </p>
  );
};
