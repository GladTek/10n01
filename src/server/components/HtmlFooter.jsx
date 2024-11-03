import React from 'react';
import PropTypes from 'prop-types';
import {AbsoluteArea} from '@jahia/js-server-core';

export const HtmlFooter = ({className}) => {
    return (
        <div className={className}>

            <AbsoluteArea name="footerArea" allowedTypes={['tenet:footerMenu']} numberOfItems="1"/>
        </div>
    );
};

HtmlFooter.propTypes = {
    className: PropTypes.string
};
