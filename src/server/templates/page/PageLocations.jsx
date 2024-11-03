import React from 'react';
import {Area} from '@jahia/js-server-core';
import {MainLayout} from '../../layouts';
export const PageLocations = () => {
    return (
        <MainLayout
            head={
                <>
                    <title>TeneT</title>
                    <meta name="description" content="gladtek: demonstration website created by Gladtek"/>
                </>
            }
        >
            <Area name="main" allowedTypes={['tenet:location']}/>
        </MainLayout>

    );
};

PageLocations.jahiaComponent = {
    nodeType: 'jnt:page',
    name: 'Locations',
    displayName: 'Locations',
    componentType: 'template'
};
