import React from 'react';
import {Render, useServerContext, getNodeProps, server, defineJahiaComponent, buildUrl} from '@jahia/js-server-core';
import {CharacterImageCard} from '@Shared/components/CharacterImageCard';

export const Character = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const character = getNodeProps(currentNode, ['name', 'function', 'description', 'image']);

    const modulePath = renderContext.getURLGenerator().getCurrentModule();
    const hasSkills = currentNode.isNodeType('tenetmix:hasSkills');
    let skillsHolderPath = null;
    if (hasSkills) {
        skillsHolderPath = currentNode.getPath() + '/skillsHolder';
    }

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
        <>
            {hasSkills && <Render path={skillsHolderPath}/>}
            <CharacterImageCard name={character.name} image={image} role={character.function} url={currentNode.getUrl()}/>
        </>
    );
};

Character.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:character',
    name: 'default',
    componentType: 'view'
});
