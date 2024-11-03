import React from 'react';

import {Render, useServerContext, defineJahiaComponent, getNodesByJCRQuery, getNodeProps} from '@jahia/js-server-core';
import {SimpleHeaderTitle} from '@Shared/components/Title/SimpleHeaderTitle';
export const CharactersQuery = () => {
    const {currentNode, renderContext} = useServerContext();
    const home = renderContext.getSite().getHome();
    const queryVariables = getNodeProps(currentNode, ['numberOfCharacters']);
    const numberToGet = queryVariables.numberOfCharacters ? Number(queryVariables.numberOfCharacters) : 3;
    const scenesQuery = 'SELECT * FROM [tenet:character] WHERE ISDESCENDANTNODE(\'' + home.getPath() + '\') order by [jcr:lastModified] desc';
    let allScenes = getNodesByJCRQuery(currentNode.getSession(), scenesQuery, numberToGet);
    return (
        <div className="mt-8">
            <SimpleHeaderTitle translationKey="section.characters.some"/>
            <div className=" px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {allScenes?.map(item => <Render key={item.getIdentifier} node={item} view="default"/>)}
                </div>
            </div>
        </div>
    );
};

CharactersQuery.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:charactersQuery',
    name: 'default',
    componentType: 'view'
});
