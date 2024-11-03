import React from 'react';
import PropTypes from 'prop-types';

export const HeaderLeftRightInfoPart = ({children}) => {
    return (
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                {children}
            </div>
        </div>
    );
};

HeaderLeftRightInfoPart.propTypes = {
    children: PropTypes.node
};

export default HeaderLeftRightInfoPart;
