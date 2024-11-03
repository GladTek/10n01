import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';
const Testimonial = ({testimonial}) => {
    // eslint-disable-next-line react/no-danger
    const messageDiv = <div dangerouslySetInnerHTML={{__html: testimonial?.message}} className="leading-loose text-gray-500 dark:text-gray-400"/>;
    return (
        <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
            {messageDiv}
            <div className="mt-6">
                <Rating rating={testimonial?.rating}/>
            </div>
            <div className="flex items-center mt-6 -mx-2">
                <img loading="lazy"
                     alt={`Testimonial ${testimonial?.fullname}`}
                     className="mx-2 rounded-full w-14 h-14"
                     src={testimonial?.image}
                        />
                <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                        {testimonial?.fullname}
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial?.function}
                    </span>
                </div>
            </div>
        </div>
    );
};

Testimonial.propTypes = {
    testimonial: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        function: PropTypes.string.isRequired
    }).isRequired
};

export default Testimonial;

