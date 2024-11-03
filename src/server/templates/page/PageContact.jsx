import React from 'react';
import {MainLayout} from '../../layouts';
import {Area} from '@jahia/js-server-core';
export const PageStatic = () => {
    return (
        <MainLayout
            head={
                <>
                    <title>TeneT</title>
                    <meta name="description" content="gladtek: demonstration website created by Gladtek"/>
                </>
            }
        >
            <Area name="main" allowedTypes={['tenet:contactForm']} numberOfItems={1}/>
        </MainLayout>

    );
};

PageStatic.jahiaComponent = {
    nodeType: 'jnt:page',
    name: 'contact',
    displayName: 'Contact',
    componentType: 'template'
};
