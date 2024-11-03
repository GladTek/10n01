import React from 'react';
import {useServerContext, getNodeProps, defineJahiaComponent, AddContentButtons, getChildNodes, Render} from '@jahia/js-server-core';

export const FaqTheme = () => {
    const {currentNode, renderContext} = useServerContext();
    const allChildren = getChildNodes(currentNode, -1);
    const faqTheme = getNodeProps(currentNode, ['jcr:title']);
    return (
        <>
            <div>{faqTheme['jcr:title']}</div>
            {renderContext.isEditMode() && allChildren.map(child =>
                <Render key={child.getIdentifier()} path={child.getPath()}/>
            )}
            <AddContentButtons/>
        </>
    );
};

FaqTheme.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:faqTheme',
    name: 'default',
    componentType: 'view'
});
