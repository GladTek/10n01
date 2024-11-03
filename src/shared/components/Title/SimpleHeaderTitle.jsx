import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
export const SimpleHeaderTitle = ({translationKey}) => {
    const {t} = useTranslation();
    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-4">
            <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none md:mb-6 group">
                    <span className="inline-block mb-1 sm:mb-4">
                        {t(translationKey)}
                    </span>
                    <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"/>
                </h2>
            </div>
        </div>
    );
};

SimpleHeaderTitle.propTypes = {
    translationKey: PropTypes.string.isRequired
};
