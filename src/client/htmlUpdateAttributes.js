export function applyRtl(rtlMode, lang) {
    let htmlSelector = document.querySelector('html');
    if (htmlSelector) {
        htmlSelector.suppressHydrationWarning = true;
        htmlSelector.lang = lang;
        if (rtlMode) {
            htmlSelector.dir = 'rtl';
            console.log('applying rtl');
        } else {
            console.log('removing rtl');

            htmlSelector.removeAttribute('dir');
        }
    }
}

export function applyLanguage(lang) {
    let htmlSelector = document.querySelector('html');
    if (htmlSelector) {
        htmlSelector.suppressHydrationWarning = true;
        htmlSelector.lang = lang;
    }
}
