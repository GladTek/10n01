import React from 'react';
import {Area} from '@jahia/js-server-core';
import {MainLayout} from '../../layouts';
export const PageFaq = () => {
    return (
        <MainLayout
            head={
                <>
                    <title>TeneT</title>
                    <meta name="description" content="gladtek: demonstration website created by Gladtek"/>
                </>
            }
        >
            <Area name="main" allowedTypes={['tenet:faqSection']} numberOfItems={1}/>
        </MainLayout>

    );
};

PageFaq.jahiaComponent = {
    nodeType: 'jnt:page',
    name: 'faq',
    displayName: 'Faq',
    componentType: 'template'
};
