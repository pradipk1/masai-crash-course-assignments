import React from 'react';
import './Header.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { useTheme } from '../context/themeContext';

function Header() {
    const {theme} = useTheme();
  return (
    <div className={`headerMain headerMain-${theme}`}>
        <p>Header</p>
        <ThemeSwitcher />
    </div>
  )
}

export default Header;