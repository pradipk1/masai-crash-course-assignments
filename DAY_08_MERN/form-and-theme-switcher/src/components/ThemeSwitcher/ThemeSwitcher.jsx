import React from 'react';
import './ThemeSwitcher.css';
import { useTheme } from '../context/themeContext';

function ThemeSwitcher() {
    const {theme, toggleTheme} = useTheme();
    console.log(theme);
  return (
    <div className={`themeSwitcher themeSwitcher-${theme}`}>
        <button onClick={() => {toggleTheme()}}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'}
        </button>
    </div>
  )
}

export default ThemeSwitcher;