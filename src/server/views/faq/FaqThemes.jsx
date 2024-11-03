import React from 'react';
import {useServerContext, getNodeProps, defineJahiaComponent, AddContentButtons, getChildNodes, Render} from '@jahia/js-server-core';

export const FaqThemes = () => {
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

FaqThemes.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:faqThemes',
    name: 'default',
    componentType: 'view'
});
