import React from 'react';
import {useServerContext, getNodeProps, defineJahiaComponent} from '@jahia/js-server-core';
import {useTranslation} from 'react-i18next';
/**
 * React JSX and Webpack are not the best option to get modern Players and components, there are a lot of webpack config tweaks just to integrate a simple Video Player
 * My preferred one I use in other project is this https://cookpete.github.io/react-player/ for now in this demo I use an iframe.
 */
export const YoutubeVideoFrame = () => {
    const {currentNode} = useServerContext();
    const video = getNodeProps(currentNode, ['videoId']);
    const {t} = useTranslation();
    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-4">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        {t('section.video.title')}
                    </p>
                </div>
            </div>
            <div className="mx-auto lg:max-w-2xl">
                <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                    <iframe className="video mx-auto lg:max-w-2xl"
                            title="Youtube player"
                            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                            src={`https://youtube.com/embed/${video.videoId}?autoplay=0`}
                         />
                </div>
            </div>
        </div>
    );
};

YoutubeVideoFrame.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenetmix:hasYoutubeSoundtrack',
    name: 'hasYoutubeSoundtrack',
    componentType: 'view'
});
