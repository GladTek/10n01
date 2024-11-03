import React from 'react';
import {Render, useServerContext, getNodeProps, getChildNodes, AddContentButtons} from '@jahia/js-server-core';
import {LinkGroup} from '@Shared/components/Link/LinkGroup';
export const FooterColumnLinksDefault = () => {
    const {currentNode} = useServerContext();
    const allChildren = getChildNodes(currentNode, -1);
    const columnDetails = getNodeProps(currentNode, [
        'jcr:title'
    ]);

    return (
        <>
            <LinkGroup header={columnDetails['jcr:title']}>
                {allChildren && allChildren.map(child =>
                    <li key={child.getIdentifier()}><Render path={child.getPath()} view="tenet"/></li>
                )}
            </LinkGroup>
            <AddContentButtons/>

        </>
    );
};

FooterColumnLinksDefault.jahiaComponent = {
    nodeType: 'tenet:footerColumnLinks',
    displayName: 'Footer Column Menu Links',
    componentType: 'view',
    name: 'default',
    properties: {
        'cache.mainResource': 'true'
    }
};
