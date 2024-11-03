import React from 'react';
import {Render, useServerContext, defineJahiaComponent, AddContentButtons, getChildNodes} from '@jahia/js-server-core';
export const SkillsHolder = () => {
    const {currentNode, renderContext} = useServerContext();
    const allChildren = getChildNodes(currentNode, -1);

    return (
        <>

            {renderContext.isEditMode() && allChildren.map(child =>
                <Render key={child.getIdentifier()} path={child.getPath()}/>
            )}
            <AddContentButtons/>
        </>
    );
};

SkillsHolder.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:skillsHolder',
    name: 'default',
    componentType: 'view'
});
