import React from 'react';
import {Render, useServerContext, getNodeProps, server, defineJahiaComponent, buildUrl} from '@jahia/js-server-core';
import HeaderLeftRightComponent from '@Shared/components/Header/HeaderLeftRightComponent';
export const LocationFull = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const location = getNodeProps(currentNode, ['name', 'description', 'image']);
    const hasGallery = currentNode.isNodeType('tenetmix:hasGallery');
    const hasYoutubeSoundtrack = currentNode.isNodeType('tenetmix:hasYoutubeSoundtrack');
    const modulePath = renderContext.getURLGenerator().getCurrentModule();
    const image = {
        src: buildUrl({value: `${modulePath}/assets/img/defaultplaceholder.jpg`}, renderContext, currentResource),
        alt: 'Placeholder'
    };

    if (location.image) {
        image.src = location.image.getUrl();
        image.alt = location.name;
        server.render.addCacheDependency({node: location.image}, renderContext);
    }

    return (
        <>
            <HeaderLeftRightComponent image={image}>
                <Render node={currentNode} view="data" parameters={{showMode: 'longMode'}}/>
            </HeaderLeftRightComponent>
            {hasGallery &&
                <Render node={currentNode} view="gallery"/>}
            {hasYoutubeSoundtrack && <Render node={currentNode} view="hasYoutubeSoundtrack"/>}
            <Render node={currentNode} view="scenes"/>
        </>
    );
};

LocationFull.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:location',
    name: 'fullPage',
    componentType: 'view'
});
