import React from 'react';
import {Render, useServerContext, defineJahiaComponent, getChildNodes, HydrateInBrowser, getNodeProps} from '@jahia/js-server-core';
import {SimpleHeaderTitle} from '@Shared/components/Title/SimpleHeaderTitle';
import CollapseCardFeatures from '@Hydrated/CollapseCardFeatures';

export const SkillsHolderCharacter = () => {
    const features = [];
    const {currentNode, currentResource} = useServerContext();
    const currentLocale = currentResource.getLocale();
    const currentLocaleCode = currentLocale.getLanguage();
    const direction = currentLocaleCode === 'ar' ? 'rtl' : 'ltr';
    const allChildren = getChildNodes(currentNode, -1);
    for (const child of allChildren) {
        let skillValue = getNodeProps(child, ['name', 'description']);
        let skill = {title: skillValue.name, description: skillValue.description};
        features.push(skill);
    }

    return (
        <>
            <SimpleHeaderTitle translationKey="section.skills.title"/>
            <HydrateInBrowser child={CollapseCardFeatures} props={{features: features, direction: direction}}/>
            {/** Old Implementation. feel free to check how it render by uncommenting it
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="max-w-screen-lg sm:mx-auto">
                    {allChildren.map(child =>
                        <Render key={child.getIdentifier()} path={child.getPath()} view="character"/>
                    )}
                </div>
            </div>
            */}

        </>
    );
};

SkillsHolderCharacter.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:skillsHolder',
    name: 'character',
    componentType: 'view'
});
