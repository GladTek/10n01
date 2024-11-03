import React from 'react';
import PropTypes from 'prop-types';
const CardTitle = ({children}) => {
    return (
        <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
    );
};

CardTitle.propTypes = {
    children: PropTypes.node
};
export default CardTitle;
