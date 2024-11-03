import React from 'react';
import PropTypes from 'prop-types';
import HeaderLeftRightImagePart from './HeaderLeftRightImagePart';
import HeaderLeftRightInfoPart from './HeaderLeftRightInfoPart';
export const HeaderLeftRightComponent = ({image, children}) => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">

            <HeaderLeftRightImagePart image={image}/>
            <HeaderLeftRightInfoPart>
                {children}
            </HeaderLeftRightInfoPart>
        </div>
    );
};

HeaderLeftRightComponent.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
    }).isRequired,
    children: PropTypes.node
};

export default HeaderLeftRightComponent;
