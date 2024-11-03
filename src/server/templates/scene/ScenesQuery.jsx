import React from 'react';

import {Render, useServerContext, defineJahiaComponent, getNodesByJCRQuery} from '@jahia/js-server-core';
import {SimpleHeaderTitle} from '@Shared/components/Title/SimpleHeaderTitle';
export const ScenesQuery = () => {
    const {currentNode, renderContext} = useServerContext();
    const home = renderContext.getSite().getHome();
    const scenesQuery = 'SELECT * FROM [tenet:scene] WHERE ISDESCENDANTNODE(\'' + home.getPath() + '\') order by day asc';
    let allScenes = getNodesByJCRQuery(currentNode.getSession(), scenesQuery, -1);
    return (
        <>

            <SimpleHeaderTitle translationKey="section.relatedScenes.title"/>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full md:max-w-full">
                    {allScenes?.map(item => <Render key={item.getIdentifier} node={item} view="location"/>)}
                </div>
            </div>
        </>
    );
};

ScenesQuery.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:scenesQuery',
    name: 'default',
    componentType: 'view'
});
