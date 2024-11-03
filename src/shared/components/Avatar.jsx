import React from 'react';
import PropTypes from 'prop-types';
import SimpleLink from './Link/SimpleLink';
const AvatarImage = ({image, direction}) => {
    return (
        <>
            <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full rounded-full"
            />
            {direction === 'inverted' ? <span className="bottom-0 right-7 absolute  w-3.5 h-3.5 bg-blue-900 border-2 border-white dark:border-gray-800 rounded-full"/> : <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-red-900 border-2 border-white dark:border-gray-800 rounded-full"/>}
        </>
    );
};

AvatarImage.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
    }).isRequired,
    direction: PropTypes.string
};

const Avatar = ({image, direction, url}) => {
    return (
        <div className="relative -ml-4 h-[50px] w-[50px] rounded-full border-4 border-white dark:border-dark-3">
            {url !== null && <SimpleLink link={url}><AvatarImage image={image} direction={direction}/></SimpleLink>}
        </div>
    );
};

Avatar.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
    }).isRequired,
    direction: PropTypes.string,
    url: PropTypes.string
};

export default Avatar;
