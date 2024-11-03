export function applyTheme(darkMode) {
    let htmlSelector = document.querySelector('html');
    let theme = null;
    console.log('%c Dark Mode Applied ? : ' + darkMode, 'background: black; color: white');
    if (htmlSelector) {
        htmlSelector.classList.remove('light', 'dark');
        if (darkMode) {
            theme = 'dark';
        } else {
            theme = 'light';
        }

        localStorage.setItem('theme', theme);
        htmlSelector.classList.add(theme);
    }
}
