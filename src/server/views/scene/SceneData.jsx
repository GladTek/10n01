import React from 'react';
import {useServerContext, getNodeProps, defineJahiaComponent} from '@jahia/js-server-core';
import {useTranslation} from 'react-i18next';
import SimpleLink from '@Shared/components/Link/SimpleLink';
export const SceneData = () => {
    const {t} = useTranslation();
    const {currentNode} = useServerContext();
    const scene = getNodeProps(currentNode, ['jcr:title', 'description', 'day']);

    // eslint-disable-next-line react/no-danger
    const descriptionDiv = <div dangerouslySetInnerHTML={{__html: scene.description}} className="mb-5 text-gray-800 dark:text-gray-200"/>;

    return (
        <>

            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                {t('day', {dayNumber: scene.day})}
            </p>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl dark:text-white">
                {scene['jcr:title']}
            </h5>

            {descriptionDiv}
            <SimpleLink link={currentNode.getParent().getUrl()} ariaLabel="back" className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#EA580C] rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                {t('scene.backToLocation')}
            </SimpleLink>

        </>
    );
};

SceneData.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:scene',
    name: 'data',
    componentType: 'view'
});
