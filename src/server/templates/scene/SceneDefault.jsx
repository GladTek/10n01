import React from 'react';
import {Render, useServerContext, defineJahiaComponent} from '@jahia/js-server-core';
import {MainLayout} from '../../layouts';

export const SceneDefault = () => {
    const {currentNode} = useServerContext();
    return (
        <MainLayout
            head={<meta name="description" content={`Scene : ${currentNode.getDisplayableName()}`}/>}
        >
            <Render node={currentNode} view="fullPage"/>
        </MainLayout>

    );
};

SceneDefault.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:scene',
    name: 'default',
    componentType: 'template'
});
