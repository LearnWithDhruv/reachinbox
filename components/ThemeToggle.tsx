import React, { useState } from 'react';

const ThemeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button onClick={toggleTheme} className="absolute top-4 right-4">
            {isDarkMode ? '☀️' : '🌑'}
        </button>
    );
};

export default ThemeToggle;
