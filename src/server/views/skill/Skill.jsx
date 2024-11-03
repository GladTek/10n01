import React from 'react';
import {useServerContext, getNodeProps, defineJahiaComponent} from '@jahia/js-server-core';

export const Skill = () => {
    const {currentNode} = useServerContext();
    const skill = getNodeProps(currentNode, ['name', 'description']);
    return (
        <>
            {skill.name}
        </>
    );
};

Skill.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:skill',
    name: 'default',
    componentType: 'view'
});
