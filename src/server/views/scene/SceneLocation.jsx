import React from 'react';
import {Render, useServerContext, getNodeProps, server, defineJahiaComponent, buildUrl, HydrateInBrowser} from '@jahia/js-server-core';
import {useTranslation} from 'react-i18next';

import truncate from 'truncate-html';
import SimpleLink from '@Shared/components/Link/SimpleLink';

export const SceneLocation = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const {t} = useTranslation();
    const modulePath = renderContext.getURLGenerator().getCurrentModule();
    const scene = getNodeProps(currentNode, ['jcr:title', 'description', 'characters', 'invertedCharacters', 'image', 'day']);
    const image = {
        src: buildUrl({value: `${modulePath}/assets/img/defaultplaceholder.jpg`}, renderContext, currentResource),
        alt: 'Placeholder'
    };
    const sceneName = scene['jcr:title'];

    if (scene.image) {
        image.src = scene.image.getUrl();
        image.alt = sceneName;
        server.render.addCacheDependency({node: scene.image}, renderContext);
    }

    const truncatedDescription = truncate(scene.description, 200, {stripTags: true});

    return (
        <div className="group relative hover:scale-[1.05] overflow-hidden border transition-shadow duration-300">
            <SimpleLink link={currentNode.getUrl()} ariaLabel={sceneName}>
                <img
            src={image.src}
            className="object-cover w-full h-64 rounded"
            alt={image.alt}
          />
            </SimpleLink>
            <div className="p-5">
                <div className="mb-2 text-xs font-semibold uppercase">
                    <span className="inline-flex items-center justify-center gap-1 rounded bg-emerald-500 px-1.5 text-sm text-white">{t('day', {dayNumber: scene.day})}</span>
                </div>

                <SimpleLink link={currentNode.getUrl()}
                            ariaLabel={sceneName}
                            className="inline-block mb-3 text-black dark:text-white transition-colors duration-200 dark:hover:text-deep-purple-accent-700 hover:text-deep-purple-accent-700"
                >
                    <p className="text-2xl font-bold leading-5">{sceneName}</p>
                </SimpleLink>
                <Render node={currentNode} view="characters"/>
                <div dangerouslySetInnerHTML={{__html: truncatedDescription}} className="mb-4 text-gray-700 dark:text-gray-200"/>

            </div>
        </div>
    );
};

SceneLocation.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:scene',
    name: 'location',
    componentType: 'view'
});
