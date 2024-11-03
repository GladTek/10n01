import React from 'react';

import {useServerContext, getNodeProps, server, defineJahiaComponent, buildUrl} from '@jahia/js-server-core';
import HeaderLeftRightComponent from '@Shared/components/Header/HeaderLeftRightComponent';
export const CharacterHeader = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const character = getNodeProps(currentNode, ['name', 'function', 'description', 'image']);
    const modulePath = renderContext.getURLGenerator().getCurrentModule();

    const image = {
        src: buildUrl({value: `${modulePath}/assets/img/defaultplaceholder.jpg`}, renderContext, currentResource),
        alt: 'Placeholder'
    };

    if (character.image) {
        image.src = character.image.getUrl();
        image.alt = character.name;
        server.render.addCacheDependency({node: character.image}, renderContext);
    }

    return (
        <HeaderLeftRightComponent image={image}>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                {character.name}
            </p>
            <h2 className="dark:text-white mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {character.function}
            </h2>

            <div dangerouslySetInnerHTML={{__html: character.description}} className="pr-5 mb-5 text-base text-gray-700 md:text-lg"/>
        </HeaderLeftRightComponent>
    );
};

CharacterHeader.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:character',
    name: 'header',
    componentType: 'view'
});
