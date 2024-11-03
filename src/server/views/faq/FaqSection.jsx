import React from 'react';
import {Render, useServerContext, getNodeProps, defineJahiaComponent, AddContentButtons, getChildNodes, getNodeFromPathOrId} from '@jahia/js-server-core';

import {HydrateInBrowser} from '@jahia/js-server-core';
import ClientFaq from '@Hydrated/ClientFaq';

export const FaqSection = () => {
    const {currentNode, renderContext} = useServerContext();
    const header = getNodeProps(currentNode, ['title', 'subtitle']);
    const allChildren = getChildNodes(currentNode, -1);
    const themesPath = currentNode.getPath() + '/themes';
    const themesNode = getNodeFromPathOrId({path: themesPath}, currentNode.getSession());
    const themes = getChildNodes(themesNode, -1);
    let themesWithKey = {};
    let tabsWithRefs = [];
    let tabs = [];
    let questions = [];

    if (!renderContext.isEditMode()) {
        for (const theme of themes) {
            tabsWithRefs.push({uuid: theme.getIdentifier(), label: theme.getPropertyAsString('jcr:title')});
            const tabName = theme.getPropertyAsString('jcr:title');
            tabs.push(tabName);
            themesWithKey[`${tabName}`] = [];
        }

        for (const child of allChildren) {
            if (child.isNodeType('tenet:faq')) {
                const faqValues = getNodeProps(child, ['question', 'answer', 'themes']);
                // Console.log(faqValues.themes?.length);
                for (let faqTheme of faqValues.themes) {
                    let themeName = faqTheme.getPropertyAsString('jcr:title');
                    themesWithKey[themeName].push({
                        question: faqValues.question,
                        answer: faqValues.answer
                    });
                }
            }
        }
    }

    const title = header.title;
    const subtitle = header.subtitle;
    Object.keys(themesWithKey).forEach(function (k) {
        questions.push({
            theme: k,
            faqs: themesWithKey[k]
        });
    });
    return (
        <>
            <HydrateInBrowser child={ClientFaq} props={{title, subtitle, tabs, questions}}/>
            {renderContext.isEditMode() && allChildren.map(child =>
                <Render key={child.getIdentifier()} path={child.getPath()}/>
            )}

            <AddContentButtons/>
        </>
    );
};

FaqSection.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:faqSection',
    name: 'default',
    componentType: 'view'
});
