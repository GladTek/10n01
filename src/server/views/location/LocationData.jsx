import React from 'react';
import {useServerContext, getNodeProps, server, defineJahiaComponent, buildUrl} from '@jahia/js-server-core';
import {useTranslation} from 'react-i18next';
import Flags from 'country-flag-icons/react/3x2';
import SimpleLink from '@Shared/components/Link/SimpleLink';
import truncate from 'truncate-html';
export const LocationData = () => {
    const {t} = useTranslation();
    const {currentNode, renderContext, currentResource} = useServerContext();
    const location = getNodeProps(currentNode, ['name', 'jcr:title', 'description', 'image', 'country']);
    const Flag = Flags[location.country];
    const showMode = currentResource.getModuleParams().get('showMode');
    const isLongVersion = showMode === 'longMode';
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

    const descriptionStr = isLongVersion ? location.description : truncate(location.description, 200, {stripTags: true});

    // eslint-disable-next-line react/no-danger
    const descriptionDiv = <div dangerouslySetInnerHTML={{__html: descriptionStr}} className="mb-5 text-gray-800 dark:text-gray-200"/>;

    return (
        <>
            <div>
                <div className="max-w-6 max-h-4 mb-4"><Flag/></div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    {t(`countries.${location.country}`)}
                </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl dark:text-white">
                {location['jcr:title']}
            </h5>
            {descriptionDiv}
            {showMode !== 'longMode' && <SimpleLink link={currentNode.getUrl()}><button type="button" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">{t('learnMore')}</button></SimpleLink>}
        </>
    );
};

LocationData.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:location',
    name: 'data',
    componentType: 'view'
});
