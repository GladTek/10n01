import React from 'react';

import {Render, useServerContext, defineJahiaComponent, getNodesByJCRQuery} from '@jahia/js-server-core';
import {SimpleHeaderTitle} from '@Shared/components/Title/SimpleHeaderTitle';
export const CharacterScenes = () => {
    const {currentNode} = useServerContext();
    const identifier = currentNode.getIdentifier();
    const invertedFlowQuery = 'SELECT * FROM [tenet:scene] as S where invertedCharacters LIKE \'%' + identifier + '%\'';
    let allInvertedFlowScenes = getNodesByJCRQuery(currentNode.getSession(), invertedFlowQuery, -1);
    const normalFlowQuery = 'SELECT * FROM [tenet:scene] as S where characters LIKE \'%' + identifier + '%\'';
    let allNormalFlowScenes = getNodesByJCRQuery(currentNode.getSession(), normalFlowQuery, -1);
    const hasNormalScenes = allNormalFlowScenes.length > 0;
    const hasInvertedScenes = allInvertedFlowScenes.length > 0;
    return (
        <>
            {hasInvertedScenes &&
            <>
                <SimpleHeaderTitle translationKey="section.relatedScenes.inInvertedFlow"/>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                        {allInvertedFlowScenes?.map(item => <Render key={item.getIdentifier} node={item} view="location"/>)}
                    </div>
                </div>
            </>}
            {hasNormalScenes &&
            <>
                <SimpleHeaderTitle translationKey="section.relatedScenes.inNormalFlow"/>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                        {allNormalFlowScenes?.map(item => <Render key={item.getIdentifier} node={item} view="location"/>)}
                    </div>
                </div>
            </>}
        </>
    );
};

CharacterScenes.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:character',
    name: 'scenes',
    componentType: 'view'
});
