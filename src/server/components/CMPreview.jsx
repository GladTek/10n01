import React from 'react';
import PropTypes from 'prop-types';
export const CMPreview = ({className, children}) => {
    return (
        <main className={className}>
            {children}
        </main>
    );
};

CMPreview.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
