import React from 'react';
import {buildUrl, HydrateInBrowser, useServerContext, AddResources} from '@jahia/js-server-core';
import LanguagesMenu from '@Hydrated/LanguagesMenu';
const getSiteLanguageAsLocales = renderContext => {
    const site = renderContext.getSite();
    switch (true) {
        case renderContext.isLiveMode():
            return site.getActiveLiveLanguagesAsLocales().toArray();

        default:
            return site.getLanguagesAsLocales().toArray();
    }
};

export const ListLanguages = () => {
    const {renderContext, currentResource} = useServerContext();
    const currentLocale = currentResource.getLocale();
    const currentLocaleCode = currentLocale.getLanguage();
    const currentLocaleName = currentLocale.getDisplayLanguage(currentLocale);
    const siteLocales = getSiteLanguageAsLocales(renderContext);

    const mainResourceNodePath = renderContext.getMainResource().getNode().getPath();
    const clientLocales = siteLocales?.map(locale => {
        const localeCode = locale.getLanguage();
        const localeName = locale.getDisplayLanguage(locale);
        const isCurrent = currentLocaleCode === localeCode;
        const url = buildUrl({path: mainResourceNodePath, language: localeCode}, renderContext, currentResource);
        return (
            {label: localeName, url: url, selected: isCurrent, localeCode: localeCode}
        );
    });
    return (
        <>
            {!renderContext.isEditMode() &&
            <>
                <AddResources type="css" resources="lang-flags.css"/>
                <HydrateInBrowser child={LanguagesMenu} props={{clientLocales, currentLocaleName, currentLocaleCode}}/>
            </>}
        </>
    );
};
