import React from 'react';
import {Render, useServerContext, getNodeProps, server, defineJahiaComponent, AddContentButtons, buildUrl, HydrateInBrowser} from '@jahia/js-server-core';

export const LocationDefault = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const location = getNodeProps(currentNode, ['name', 'jcr:title', 'description', 'image', 'country']);

    const modulePath = renderContext.getURLGenerator().getCurrentModule();
    const image = {
        src: buildUrl({value: `${modulePath}/assets/img/defaultplaceholder.jpg`}, renderContext, currentResource),
        alt: 'Placeholder'
    };

    if (location.image) {
        image.src = location.image.getUrl();
        image.alt = location.name;
        server.render.addCacheDependency({node: location.image}, renderContext);
    }

    return (
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-8">
            <div className="flex rtl:flex-row-reverse flex-col max-w-screen-lg overflow-hidden border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2">
                    <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full lg:absolute h-80 lg:h-full"
                        />
                    <svg
                            className="absolute top-0 right-0 rtl:left-0 hidden h-full text-white dark:text-slate-800 lg:inline-block"
                            viewBox="0 0 20 104"
                            fill="currentColor"
                    >
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"/>
                    </svg>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-16 lg:pl-10 lg:w-1/2">
                    <Render node={currentNode} view="data" editable="false"/>
                </div>
            </div>
            <Render node={currentNode} view="scenes" editable="false"/>
            <AddContentButtons/>

        </div>
    );
};

LocationDefault.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:location',
    name: 'default',
    componentType: 'view'
});
