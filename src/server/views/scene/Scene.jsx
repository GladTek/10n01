import React from 'react';
import {Render, useServerContext, getNodeProps, defineJahiaComponent} from '@jahia/js-server-core';

export const Scene = () => {
    const {currentNode} = useServerContext();
    const scene = getNodeProps(currentNode, ['jcr:title', 'description', 'characters', 'invertedCharacters', 'image']);
    return (
        <>
            <div>{scene['jcr:title']}</div>
            <section className="bg-white py-[10px] dark:bg-dark">
                <div className="grid gap-8 grid-cols-2 mx-auto px-4 sm:container">
                    <div className="flex items-end justify-center">
                        {scene?.characters?.map(item =>
                            <Render key={`character-${item.getIdentifier()}`} node={item} view="avatar"/>
            )}
                    </div>
                    <div className="flex items-end justify-center">
                        {scene?.invertedCharacters?.map(item => (
                            <Render key={`character-inverted-${item.getIdentifier()}`} node={item} view="avatar" parameters={{direction: 'inverted'}}/>
            )
            )}
                    </div>
                </div>
            </section>
        </>
    );
};

Scene.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:scene',
    name: 'default',
    componentType: 'view'
});
