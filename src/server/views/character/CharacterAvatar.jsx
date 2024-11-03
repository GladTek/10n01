import React from 'react';

import {useServerContext, getNodeProps, server, defineJahiaComponent, buildUrl} from '@jahia/js-server-core';
import Avatar from '@Shared/components/Avatar';

export const CharacterAvatar = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const character = getNodeProps(currentNode, ['image']);
    const modulePath = renderContext.getURLGenerator().getCurrentModule();
    const direction = currentResource.getModuleParams().get('direction');
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
        <Avatar image={image} direction={direction} url={currentNode.getUrl()}/>
    );
};

CharacterAvatar.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:character',
    name: 'avatar',
    componentType: 'view'
});
