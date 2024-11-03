import React from 'react';
import PropTypes from 'prop-types';
import {HtmlFooter, HtmlHead} from '../components';
import {AbsoluteArea, AddResources, HydrateInBrowser, useServerContext} from '@jahia/js-server-core';
import clsx from 'clsx';
import CookieConsent from '@Hydrated/CookieConsent';
import i18next from 'i18next';
import HTMLSupport from '@Hydrated/HTMLSupport';
export const MainLayout = ({head, className, children}) => {
    const {renderContext} = useServerContext();
    const dir = i18next.dir(i18next.language);
    return (
        <>
            <HtmlHead>
                {head}
            </HtmlHead>
            <body className={clsx('dark:bg-slate-800', className)} dir={dir}>
                <AbsoluteArea name="navArea" allowedTypes={['tenet:navMenu']} numberOfItems="1"/>
                <main className={className}>
                    {children}
                </main>
                <HtmlFooter className={className}/>
                <AddResources type="css" resources="reversed.css"/>
                <AddResources type="javascript" resources="tailwind.js"/>
                {!renderContext.isEditMode() &&
                <HydrateInBrowser child={CookieConsent}/>}
                <HydrateInBrowser child={HTMLSupport}/>
            </body>
        </>
    );
};

MainLayout.propTypes = {
    head: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string
};
