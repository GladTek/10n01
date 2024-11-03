import React from 'react';
import PropTypes from 'prop-types';
export const LinkGroup = ({children, header}) => {
    return (
        <div>
            <p className="font-semibold tracking-wide text-teal-accent-400">
                {header}
            </p>
            <ul className="mt-2 space-y-2">
                {children}
            </ul>
        </div>
    );
};

LinkGroup.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string
};

