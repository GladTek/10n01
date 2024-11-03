import React from 'react';
import {Area} from '@jahia/js-server-core';
import {MainLayout} from '../../layouts';

export const PageHome = () => {
    return (

        <MainLayout
            head={
                <>
                    <title>TeneT</title>
                    <meta name="description" content="TeneT: demonstration website created by Gladtek"/>
                </>
            }
        >
            <Area name="heading" allowedTypes={['tenet:headerSection']} numberOfItems={1}/>
            <Area name="main" allowedTypes={['tenet:charactersQuery', 'tenet:testimonialSection']}/>
        </MainLayout>

    );
};

PageHome.jahiaComponent = {
    nodeType: 'jnt:page',
    name: 'home',
    displayName: 'Home',
    componentType: 'template'
};
