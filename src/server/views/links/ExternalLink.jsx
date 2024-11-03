import React from 'react';
import {useServerContext, getNodeProps} from '@jahia/js-server-core';
import PropTypes from 'prop-types';
import SimpleLink from '@Shared/components/Link/SimpleLink';

export const ExternalLink = ({children, className, hasNoLabel, ariaLabel}) => {
    const {currentNode} = useServerContext();
    const linkDetails = getNodeProps(currentNode, [
        'jcr:title',
        'j:url',
        'j:target',
        'linkBackgroundColor'
    ]);
    const hasItsOwnStyle = currentNode.isNodeType('tenetmix:styleForLink');

    const cssOverride = 'px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#' + linkDetails.linkBackgroundColor + '] rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80';
    let calculatedClassName = hasItsOwnStyle ? cssOverride : 'transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400';
    if (className) {
        calculatedClassName = className;
    }

    return (
        <>
            {hasNoLabel && <SimpleLink ariaLabel={ariaLabel} link={linkDetails['j:url']} target={linkDetails['j:target']} className={calculatedClassName}>{children}</SimpleLink>}
            {!hasNoLabel && <SimpleLink ariaLabel={ariaLabel} link={linkDetails['j:url']} label={linkDetails['jcr:title']} target={linkDetails['j:target']} className={calculatedClassName}>{children}</SimpleLink>}
        </>
    );
};

ExternalLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hasNoLabel: PropTypes.bool,
    ariaLabel: PropTypes.string
};

ExternalLink.jahiaComponent = {
    nodeType: 'jnt:externalLink',
    displayName: 'External Link',
    name: 'tenet',
    componentType: 'view',
    properties: {
        'cache.mainResource': 'true'
    }
};
