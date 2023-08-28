import React, { useState } from "react";

function Theme({theme,onThemeChange}) {


  return (
    <>
    <div className={theme === "light" ? 'light' : 'dark'}>
      <div className="theme">
        <label>
          Dark theme
          <input
            type="radio"
            value="dark"
            checked={theme === "dark"}
            onChange={() => onThemeChange("dark")}
            
          />
        </label>
        <label>
          {" "}
          Light theme
          <input
            type="radio"
            value="light"
            checked={theme === "light"}
            onChange={() => onThemeChange("light")}
            
          />
          </label>
      </div>
      </div>
    </>
  );
}

export default Theme;
