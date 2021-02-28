import React from "react";
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";
import { GlobalContext } from "../context/GlobalState";

export const Banner = () => {
  const { setResults } = React.useContext(GlobalContext);
  return (
    <>
      <nav className="navbar fixed-top scrolling-navbar banner">
        <h2
          className="navbar-brand clickableNav"
          onClick={() => setResults([])}
        >
          Pokemon Stat Checker
        </h2>
        <a
          href="https://github.com/jabuckle26/pokemon-stats-ranking"
          target="_blank"
          className="codeIcon"
        >
          <IconContext.Provider
            value={{
              size: "1.8rem",
              className: "global-class-name",
            }}
          >
            <div className="clickableNav">
              <GoMarkGithub className="codeIcon" />
            </div>
          </IconContext.Provider>
        </a>
      </nav>
    </>
  );
};
