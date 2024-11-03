import React from 'react';
import PropTypes from 'prop-types';

export const NotificationSample = ({title, message}) => {
    return (
        <div className="mx-auto flex w-80 max-w-full flex-col overflow-hidden rounded bg-emerald-500 px-4 py-3 text-sm text-white shadow-lg shadow-emerald-400/20 ring-1 ring-inset ring-emerald-600" role="output">
            <div className="mb-2 flex items-center gap-4">
                <h3 className="flex-1 font-semibold">{title}</h3>
            </div>
            <div className="text-emerald-100">
                <p>
                    {message}
                </p>
            </div>
        </div>
    );
};

NotificationSample.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default NotificationSample;
