import React from 'react';
import {
    useServerContext,
    Render,
    defineJahiaComponent
} from '@jahia/js-server-core';
import {CMPreview} from '../../components';

export const CharacterCm = () => {
    const {currentNode} = useServerContext();

    return (
        <CMPreview>
            <Render node={currentNode} view="default"/>
        </CMPreview>
    );
};

CharacterCm.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:character',
    name: 'cm',
    componentType: 'view'
});
