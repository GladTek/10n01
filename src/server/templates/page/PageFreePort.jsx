import React from 'react';
import {Area} from '@jahia/js-server-core';
import {MainLayout} from '../../layouts';

export const PageFreePort = () => {
    return (
        <MainLayout
            head={
                <>
                    <title>TeneT</title>
                    <meta name="description" content="gladtek: demonstration website created by Gladtek"/>
                </>
            }
        >
            <div className="px-16 py-16 bg-white">
                <Area name="main"/>
            </div>
        </MainLayout>

    );
};

PageFreePort.jahiaComponent = {
    nodeType: 'jnt:page',
    name: 'freePort',
    displayName: 'Free Port',
    componentType: 'template'
};
