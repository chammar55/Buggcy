"use client";
import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
// sdssdsd
const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <button onClick={toggleDarkMode}>{darkMode ? <Moon /> : <Sun />}</button>
    </div>
  );
};

export default DarkModeButton;
