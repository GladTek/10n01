import React from 'react';
import {useServerContext, getNodeProps} from '@jahia/js-server-core';
import {ExternalLink} from './ExternalLink';
import {GithubSvg, LinkedInSvg, FacebookSvg} from '@Shared/components/Social/SocialSvg';

export const SocialMediaLink = () => {
    const {currentNode} = useServerContext();
    const socialMediaLinkVars = getNodeProps(currentNode, ['socialMediaType']);
    let svgNode = null;
    let ariaLabel = null;
    switch (socialMediaLinkVars.socialMediaType) {
        case 'github':
            svgNode = <GithubSvg/>;
            ariaLabel = 'Github';
            break;
        case 'facebook':
            svgNode = <FacebookSvg/>;
            ariaLabel = 'Facebook';
            break;
        case 'linkedin':
            svgNode = <LinkedInSvg/>;
            ariaLabel = 'LinkedIn';
            break;
        default:
            ariaLabel = 'Github';
            svgNode = <GithubSvg/>;
    }

    return (
        <ExternalLink hasNoLabel ariaLabel={ariaLabel} className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400">{svgNode}</ExternalLink>
    );
};

SocialMediaLink.jahiaComponent = {
    nodeType: 'tenet:socialMediaLink',
    displayName: 'External Link',
    name: 'default',
    componentType: 'view',
    properties: {
        'cache.mainResource': 'true'
    }
};
