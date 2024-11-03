import React from 'react';
import {Render, useServerContext, getNodeProps, defineJahiaComponent} from '@jahia/js-server-core';
import {useTranslation} from 'react-i18next';

export const SceneCharacters = () => {
    const {t} = useTranslation();
    const {currentNode} = useServerContext();
    const scene = getNodeProps(currentNode, ['characters', 'invertedCharacters']);
    return (
        <section className="py-[10px]">
            <div className="grid gap-8 grid-cols-2 mx-auto px-4 sm:container">
                <div>
                    {scene?.characters?.length > 0 &&
                    <>
                        <div className="text-center text-black dark:text-white">{t('section.characters.inNormalFlowShort')}</div>
                        <div className="flex items-end justify-center">
                            {scene?.characters?.map(item =>
                                <Render key={`character-${item.getIdentifier()}`} node={item} view="avatar"/>
                            )}
                        </div>
                    </>}
                </div>
                <div>
                    {scene?.invertedCharacters?.length > 0 &&
                    <>
                        <div className="text-center text-black dark:text-white">{t('section.characters.inInvertedFlowShort')}</div>
                        <div className="flex items-end justify-center">
                            {scene?.invertedCharacters?.map(item =>
                                <Render key={`character-inverted-${item.getIdentifier()}`} node={item} view="avatar" parameters={{direction: 'inverted'}}/>
                            )}
                        </div>
                    </>}
                </div>
            </div>
        </section>
    );
};

SceneCharacters.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:scene',
    name: 'characters',
    componentType: 'view'
});
