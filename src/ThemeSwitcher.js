// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleThemeAction } from './themeActions'; 

// const ThemeSwitcher = () => {
// const dispatch = useDispatch();
// const darkMode = useSelector(state => state.theme.darkMode);

// const toggleTheme = () => {
//     dispatch(toggleThemeAction()); 
// };

// return (
//     <div className="theme-switcher">
//     <label htmlFor="themeSwitch">Toggle Theme:</label>
//     <input
//         type="checkbox"
//         id="themeSwitch"
//         checked={darkMode}
//         onChange={toggleTheme}
//     />
//     <span>{darkMode ? "Dark" : "Light"}</span>
//     </div>
// );
// };

// export default ThemeSwitcher;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleThemeAction } from './themeActions';

const ThemeSwitcher = () => {
const dispatch = useDispatch();
const darkMode = useSelector(state => state.theme.darkMode);

const toggleTheme = () => {
    dispatch(toggleThemeAction());
};

return (
    <div className={`theme-switcher ${darkMode ? 'dark-mode' : 'light-mode'}`}>
    <label htmlFor="themeSwitch">Toggle Theme:</label>
    <input
        type="checkbox"
        id="themeSwitch"
        checked={darkMode}
        onChange={toggleTheme}
    />
    <span>{darkMode ? "Dark" : "Light"}</span>
    </div>);
};

export default ThemeSwitcher;
