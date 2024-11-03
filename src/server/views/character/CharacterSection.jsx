import React from 'react';
import {Render, useServerContext, getNodeProps, defineJahiaComponent, AddContentButtons, getChildNodes} from '@jahia/js-server-core';
import {useTranslation} from 'react-i18next';
export const CharacterSection = () => {
    const {t} = useTranslation();
    const {currentNode} = useServerContext();
    const section = getNodeProps(currentNode, ['title', 'subtitle']);
    const allChildren = getChildNodes(currentNode, -1);
    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            {t('section.characters.team')}
                        </p>
                    </div>
                    <h2 className="dark:text-white max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        {section.title}
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        {section.subtitle}
                    </p>
                </div>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {allChildren.map(child =>
                        <Render key={child.getIdentifier()} path={child.getPath()}/>
                    )}
                </div>
            </div>

            <AddContentButtons/>
        </>
    );
};

CharacterSection.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:characterSection',
    name: 'default',
    componentType: 'view'
});
