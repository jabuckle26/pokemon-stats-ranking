import React from "react";
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";
import { FaGripVertical } from "react-icons/fa";

export const Banner = () => {
  return (
    <>
      <nav className="navbar fixed-top scrolling-navbar banner">
        <h2 className="navbar-brand">Pokemon Stat Checker</h2>
        <IconContext.Provider
          value={{
            size: "1.8rem",
            className: "global-class-name",
          }}
        >
          <div>
            <GoMarkGithub className="codeIcon" />
          </div>
        </IconContext.Provider>
      </nav>
    </>
  );
};
