import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';

export const HeaderLeftRightImagePart = ({image}) => {
    const dir = i18next.dir(i18next.language);
    const directionCss = dir === 'rtl' ? 'left-0' : 'right-0';
    const directionSvgCss = dir === 'rtl' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2';

    return (
        <div className={`inset-y-0 top-0 ${directionCss} z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0`}>
            <svg
                        className={`absolute ${directionSvgCss} hidden h-full text-white dark:text-gray-900 transform lg:block`}
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
            >
                <path d="M50 0H100L50 100H0L50 0Z"/>
            </svg>
            <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src={image.src}
                        alt={image.alt}
                    />
        </div>
    );
};

HeaderLeftRightImagePart.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
    }).isRequired
};

export default HeaderLeftRightImagePart;
