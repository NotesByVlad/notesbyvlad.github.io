import React, { useEffect, useState } from 'react';

const themes = ['light', 'dark', 'forest'];

export default function ThemeSwitcher() {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, 
  
  [theme]);

  return (
    <div className="fixed bottom-20 left-4 inline-block text-left">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="group bg-button-bg px-1 hover:bg-button-hover rounded shadow">
        <svg 
          viewBox="0 0 100 100" 
          width="40" 
          height="40" 
          xmlns="http://www.w3.org/2000/svg">
          {/* Palette shape: use text color for stroke and fill */}
          <path 
            d="M44.55 10.526C18.234 10.526 0 31.58 0 42.106s5.263 18.42 15.79 18.42c10.526 0 15.789 2.632 15.789 10.527
              c0 10.526 7.895 18.42 18.421 18.42c34.21 0 50-18.42 50-36.841c0-31.58-23.87-42.106-55.45-42.106z"
            className="fill-background group-hover:fill-text transition-colors duration-500"/>
          {/* Paint dabs */}
          <circle cx="10" cy="40" r="7" className="fill-green-500" />
          <circle cx="25" cy="25" r="7" className="fill-red-500" />
          <circle cx="45" cy="19" r="7" className="fill-orange-500" />
          <circle cx="66" cy="23" r="7" className="fill-blue-300" />
          <circle cx="85" cy="33" r="7" className="fill-black" />
          <circle cx="90" cy="52" r="7" className="fill-white" />
          {/* <!-- Thumb hole: background (surface), stroke (text) --> */}
          <circle cx="49" cy="71" r="11" className="fill-button-bg"/>
        </svg>
      </button>

      {showMenu && (
        <div className="absolute bottom-full mb-2 bg-surface border border-border p-2 rounded shadow flex flex-col gap-2">
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => {
                setTheme(t);
                setShowMenu(false);
              }}
              className={`text-sm px-3 py-1 rounded hover:bg-button-hover${
                theme === t ? 'font-bold' : ''
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}