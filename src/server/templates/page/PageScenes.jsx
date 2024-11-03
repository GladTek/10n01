import React from 'react';
import {Area} from '@jahia/js-server-core';
import {MainLayout} from '../../layouts';
export const PageScenes = () => {
    return (
        <MainLayout
            head={
                <>
                    <title>TeneT</title>
                    <meta name="description" content="gladtek: demonstration website created by Gladtek"/>
                </>
            }
        >
            <Area name="main" allowedTypes={['tenet:scenesQuery']} numberOfItems={1}/>
        </MainLayout>

    );
};

PageScenes.jahiaComponent = {
    nodeType: 'jnt:page',
    name: 'Scenes',
    displayName: 'Scenes',
    componentType: 'template'
};
