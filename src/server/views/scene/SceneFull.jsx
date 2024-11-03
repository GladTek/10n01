import React from 'react';
import {Render, useServerContext, getNodeProps, server, defineJahiaComponent, buildUrl} from '@jahia/js-server-core';
import HeaderLeftRightComponent from '@Shared/components/Header/HeaderLeftRightComponent';
export const SceneFull = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const modulePath = renderContext.getURLGenerator().getCurrentModule();
    const hasGallery = currentNode.isNodeType('tenetmix:hasGallery');
    const hasYoutubeSoundtrack = currentNode.isNodeType('tenetmix:hasYoutubeSoundtrack');
    const scene = getNodeProps(currentNode, ['jcr:title', 'description', 'characters', 'invertedCharacters', 'image', 'day']);
    const image = {
        src: buildUrl({value: `${modulePath}/assets/img/defaultplaceholder.jpg`}, renderContext, currentResource),
        alt: 'Placeholder'
    };
    const sceneName = scene['jcr:title'];
    if (scene.image) {
        image.src = scene.image.getUrl();
        image.alt = sceneName;
        server.render.addCacheDependency({node: scene.image}, renderContext);
    }

    return (
        <>
            <HeaderLeftRightComponent image={image}>
                <Render node={currentNode} view="data"/>
            </HeaderLeftRightComponent>
            <Render node={currentNode} view="characters"/>

            {hasGallery &&
                <Render node={currentNode} view="gallery"/>}
            {hasYoutubeSoundtrack && <Render node={currentNode} view="hasYoutubeSoundtrack"/>}
        </>

    );
};

SceneFull.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:scene',
    name: 'fullPage',
    componentType: 'view'
});
