import React from 'react';
import {useServerContext, getNodeProps, buildUrl} from '@jahia/js-server-core';
import SimpleLink from '@Shared/components/Link/SimpleLink';

export const NodeLinkTenet = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const linkDetails = getNodeProps(currentNode, [
        'jcr:title',
        'j:node',
        'j:target',
        'linkBackgroundColor'
    ]);
    const currentLocale = currentResource.getLocale();
    const currentLocaleCode = currentLocale.getLanguage();
    const url = buildUrl({path: linkDetails['j:node'].getPath(), language: currentLocaleCode}, renderContext, currentResource);

    const hasItsOwnStyle = currentNode.isNodeType('tenetmix:styleForLink');
    const cssOverride = 'px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#' + linkDetails.linkBackgroundColor + '] rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80';
    let calculatedClassName = hasItsOwnStyle ? cssOverride : 'transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400';

    return (
        <SimpleLink link={url} label={linkDetails['jcr:title']} target={linkDetails['j:target']} className={calculatedClassName}/>
    );
};

NodeLinkTenet.jahiaComponent = {
    nodeType: 'jnt:nodeLink',
    displayName: 'Node Link',
    name: 'tenet',
    componentType: 'view',
    properties: {
        'cache.mainResource': 'true'
    }
};
