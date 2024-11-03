import React from 'react';
import PropTypes from 'prop-types';
import {buildUrl, useServerContext} from '@jahia/js-server-core';
export const HtmlHead = ({children}) => {
    const {renderContext, currentResource} = useServerContext();
    const modulePath = renderContext.getURLGenerator().getCurrentModule();
    return (
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" type="image/png" href={buildUrl({value: `${modulePath}/assets/favicon-32x32.png`}, renderContext, currentResource)}/>
            {children}
        </head>
    );
};

HtmlHead.propTypes = {
    children: PropTypes.node
};
