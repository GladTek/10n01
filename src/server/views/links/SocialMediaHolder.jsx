import React from 'react';
import {Render, useServerContext, defineJahiaComponent, AddContentButtons, getChildNodes} from '@jahia/js-server-core';
export const SocialMediaHolder = () => {
    const {currentNode} = useServerContext();
    const allChildren = getChildNodes(currentNode, -1);

    return (
        <>
            <div className="flex items-center mt-4 space-x-4 rtl:space-x-reverse sm:mt-0">
                {allChildren.map(child =>
                    <Render key={child.getIdentifier()} path={child.getPath()}/>
                )}
            </div>
            <AddContentButtons/>
        </>
    );
};

SocialMediaHolder.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:socialMediaHolder',
    displayName: 'Social Media Holder',
    name: 'default',
    componentType: 'view',
    properties: {
        'cache.mainResource': 'true'
    }
});

