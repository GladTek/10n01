import React from 'react';
import {useServerContext, getNodeProps, defineJahiaComponent} from '@jahia/js-server-core';

export const SkillCharacter = () => {
    const {currentNode} = useServerContext();
    const skill = getNodeProps(currentNode, ['name', 'description']);
    return (
        <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-500">
            <div className="mb-4 lg:mb-0">
                <h5 className="dark:text-white mb-4 text-xl font-bold leading-none sm:text-2xl">
                    {skill.name}
                </h5>
                <div className="relative pr-8">
                    <div dangerouslySetInnerHTML={{__html: skill.description}} className="text-base text-gray-700 md:text-lg"/>
                </div>
            </div>
        </div>
    );
};

SkillCharacter.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:skill',
    name: 'character',
    componentType: 'view'
});
