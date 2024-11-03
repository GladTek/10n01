import React from 'react';
import PropTypes from 'prop-types';
import SimpleLink from './Link/SimpleLink';
export const CharacterImageCard = ({name, description, role, image, url = ''}) => {
    // eslint-disable-next-line react/no-danger
    const descriptionDiv = <div dangerouslySetInnerHTML={{__html: description}} className="mb-4 text-xs tracking-wide text-gray-400"/>;
    return (
        <SimpleLink link={url}>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={image.src}
                    alt={image.alt}
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                        {name}
                    </p>
                    <p className="mb-4 text-xs text-gray-100">{role}</p>
                    {description && descriptionDiv}
                </div>
            </div>
        </SimpleLink>
    );
};

CharacterImageCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    role: PropTypes.string,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
    }).isRequired,
    url: PropTypes.string
};
