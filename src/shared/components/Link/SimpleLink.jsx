import React from 'react';
import PropTypes from 'prop-types';

const SimpleLink = ({link, label, title, ariaLabel, target, className, children}) => {
    return (
        <a
            href={link}
            className={className}
            target={target}
            title={title}
            aria-label={ariaLabel}
        >
            {label}
            {children}
        </a>
    );
};

SimpleLink.propTypes = {
    link: PropTypes.string.isRequired,
    label: PropTypes.string,
    title: PropTypes.string,
    ariaLabel: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
};

export default SimpleLink;
