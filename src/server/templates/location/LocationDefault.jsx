import React from 'react';
import {Render, useServerContext, defineJahiaComponent} from '@jahia/js-server-core';
import {MainLayout} from '../../layouts';

export const LocationDefault = () => {
    const {currentNode} = useServerContext();
    return (
        <MainLayout
        head={<meta name="description" content={`Location : ${currentNode.getDisplayableName()}`}/>}
        >
            <Render node={currentNode} view="fullPage"/>
        </MainLayout>

    );
};

LocationDefault.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:location',
    name: 'default',
    componentType: 'template'
});
