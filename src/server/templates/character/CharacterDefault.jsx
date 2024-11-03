import React from 'react';
import {Render, useServerContext, defineJahiaComponent} from '@jahia/js-server-core';
import {MainLayout} from '../../layouts';

export const CharacterDefault = () => {
    const {currentNode} = useServerContext();
    return (
        <MainLayout
        head={<meta name="description" content={`Character : ${currentNode.getDisplayableName()}`}/>}
        >
            <Render node={currentNode} view="fullPage"/>
        </MainLayout>

    );
};

CharacterDefault.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:character',
    name: 'default',
    componentType: 'template'
});
