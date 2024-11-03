import React from 'react';
import {Render, useServerContext, defineJahiaComponent} from '@jahia/js-server-core';

export const CharacterFullPage = () => {
    const {currentNode} = useServerContext();
    const hasGallery = currentNode.isNodeType('tenetmix:hasGallery');
    const hasSkills = currentNode.isNodeType('tenetmix:hasSkills');
    const hasYoutubeSoundtrack = currentNode.isNodeType('tenetmix:hasYoutubeSoundtrack');
    let skillsHolderPath = null;
    if (hasSkills) {
        skillsHolderPath = currentNode.getPath() + '/skillsHolder';
    }

    return (
        <>
            <Render node={currentNode} view="header"/>

            {hasGallery &&
                <Render node={currentNode} view="gallery"/>}

            {hasYoutubeSoundtrack && <Render node={currentNode} view="hasYoutubeSoundtrack"/>}

            {hasSkills && <Render path={skillsHolderPath} view="character"/>}

            <Render node={currentNode} view="scenes"/>

        </>
    );
};

CharacterFullPage.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:character',
    name: 'fullPage',
    componentType: 'view'
});
