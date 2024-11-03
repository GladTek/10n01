import React from 'react';
import {Render, useServerContext, defineJahiaComponent, getChildNodes} from '@jahia/js-server-core';

export const LocationListScenes = () => {
    const {currentNode} = useServerContext();
    const allChildren = getChildNodes(currentNode, -1);

    return (
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-8">
            <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-8">
                <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {allChildren.map(child =>
                        <Render key={child.getIdentifier()} path={child.getPath()} view="location"/>
                    )}
                </div>
            </div>
        </div>
    );
};

LocationListScenes.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:location',
    name: 'scenes',
    componentType: 'view'
});
