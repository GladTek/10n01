import React from 'react';

import {useServerContext, getNodeProps, defineJahiaComponent} from '@jahia/js-server-core';
import {SimpleHeaderTitle} from '@Shared/components/Title/SimpleHeaderTitle';

export const Gallery = () => {
    const {currentNode} = useServerContext();
    const character = getNodeProps(currentNode, ['gallery']);

    return (
        <>
            <SimpleHeaderTitle translationKey="section.gallery.title"/>

            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-10">
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
                    {character?.gallery?.map(item => {
                        return <img loading="lazy" key={`gallery-${item.getIdentifier()}`} alt="" className="hover:scale-[1.05] h-auto max-w-full rounded-lg" src={item.getUrl()}/>;
                    }
                    )}
                </div>
            </div>
        </>
    );
};

Gallery.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenetmix:hasGallery',
    name: 'gallery',
    componentType: 'view'
});
