import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const Nav = ({ theme, setTheme, libraryStatus, setLibraryStatus }) => {
  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <nav>
      <h1>Waves</h1>
      <div>
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>
        <FontAwesomeIcon
          onClick={handleTheme}
          icon={theme === "dark" ? faSun : faMoon}
          size='2x'
        />
      </div>
    </nav>
  );
};

export default Nav;
