import React, {useEffect, useState, useRef} from 'react';
import {applyTheme} from './theme';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
const ThemeSwitch = ({dir}) => {
    const [darkMode, setDarkMode] = useState(false);
    const {t} = useTranslation();
    const lightModeDirCss = dir === 'rtl' ? 'right-[1.625rem]' : 'left-[1.625rem]';
    const darkModeDirCss = dir === 'rtl' ? 'right-0.5' : 'left-0.5';
    const firstUpdate = useRef(true);
    useEffect(() => {
        let theme = null;
        if (firstUpdate.current) {
            theme = localStorage.getItem('theme');
            setDarkMode(theme === 'dark');
            firstUpdate.current = false;
        } else {
            applyTheme(darkMode);
        }
    }, [darkMode]);

    return (
        <>
            <div className="font-semibold tracking-wide text-teal-accent-400">{t('theme')}</div>
            <label className="relative flex cursor-pointer flex-wrap items-center gap-2 text-white">
                <input id="themeSwitcher"
                       className={`peer ${dir === 'rtl' ? 'reversed' : ''} relative h-6 w-12 cursor-pointer appearance-none rounded-xl bg-red-300 transition-colors after:absolute after:left-0 after:top-0 after:h-6 after:w-6 after:rounded-full after:bg-red-500 after:transition-all checked:bg-blue-200 checked:after:left-6 checked:after:bg-blue-500 hover:bg-red-400 after:hover:bg-red-600 checked:hover:bg-blue-300 checked:after:hover:bg-blue-600 focus:outline-none checked:focus:bg-blue-400 checked:after:focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-red-200 disabled:after:bg-red-300`}
                       type="checkbox"
                       value=""
                       checked={darkMode}
                       onChange={() => setDarkMode(!darkMode)}
        />

                <div className={`absolute ${lightModeDirCss} top-0.5 flex h-5 w-5 items-center justify-center text-white opacity-0 transition-opacity peer-checked:opacity-100`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                        <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z"/>
                    </svg>
                </div>

                <div className={`absolute ${darkModeDirCss} top-0.5 flex h-5 w-5 items-center justify-center text-white opacity-100 transition-opacity peer-checked:opacity-0`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                        <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z"/>
                    </svg>
                </div>
            </label>

        </>
    );
};

ThemeSwitch.propTypes = {
    dir: PropTypes.string
};

export default ThemeSwitch;
