import React, {useEffect, useState, useRef} from 'react';
import {applyLanguage} from './htmlUpdateAttributes';
import i18next from 'i18next';
const HTMLSupport = () => {
    const [language, setLanguage] = useState(i18next.language);
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            setLanguage(i18next.language);
            applyLanguage(i18next.language);
            firstUpdate.current = false;
        }
    }, [language]);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <></>
    );
};

export default HTMLSupport;
