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
        className="bg-button-bg text-text px-4 py-2 hover:bg-button-hover rounded shadow"
      >
        Theme
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
              className={`text-sm px-3 py-1 rounded hover:bg-button-hover ${
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