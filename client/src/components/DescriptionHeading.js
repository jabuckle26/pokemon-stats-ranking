import React from "react";

export const DescriptionHeading = ({ classDescriptor, descriptor }) => {
  return (
    <div className={`row ${classDescriptor}`}>
      <p>{descriptor}</p>
    </div>
  );
};
