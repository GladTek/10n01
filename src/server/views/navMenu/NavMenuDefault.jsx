import React from 'react';
import {useServerContext, getNodeProps, buildNavMenu, server, HydrateInBrowser} from '@jahia/js-server-core';
import clsx from 'clsx';
import MobileNav from '@Hydrated/MobileNav';
import SimpleLink from '@Shared/components/Link/SimpleLink';
export const NavMenuDefault = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();

    const nav = getNodeProps(currentNode, [
        'base',
        'maxDepth',
        'startLevel',
        'menuItemView',
        'logo'
    ]);

    const menu = buildNavMenu(
        nav.maxDepth,
        nav.base,
        nav.menuItemView,
        nav.startLevel,
        renderContext,
        currentResource
    );
    const menuForClient = menu.map(myFunction);
    function myFunction(element) {
        let navSample = {
            url: element.node.getUrl(),
            displayName: element.node.getDisplayableName(),
            selected: element.selected
        };
        return navSample;
    }

    const mainPath = renderContext.getMainResource().getPath();
    const home = renderContext.getSite().getHome();
    let isLogoPresent = false;
    if (nav.logo) {
        server.render.addCacheDependency({node: nav.logo}, renderContext);
        isLogoPresent = true;
    }


    return (
        <div className="dark:bg-gray-900">
            <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16 rtl:space-x-reverse">
                    <div className="items-center hidden space-x-8 lg:flex rtl:space-x-reverse">
                        {menu?.map(({node, selected}) => (
                            <SimpleLink key={node.getIdentifier()}
                                        link={node.getUrl()}
                                        ariaLabel={node.getDisplayableName()}
                                        title={node.getDisplayableName()}
                                        label={node.getDisplayableName()}
                                        className={clsx('rounded-md px-3 py-2 text-sm font-medium', {
                                'bg-red-900 text-white': selected || mainPath.includes(node.getPath())
                            }, {
                                'text-secondary hover:bg-red-700 hover:text-white dark:text-white': !selected && !mainPath.includes(node.getPath())
                            })}/>

                            ))}
                    </div>

                    <SimpleLink link={home.getUrl()}
                                ariaLabel={home.getDisplayableName()}
                                title={home.getDisplayableName()}
                                className="inline-flex items-center"
                    >{isLogoPresent ?
                        <img width={200}
                             height={50}
                             src={nav.logo.getUrl()}
                             alt="logo"
                             className="max-w-full  dark:invert"
                            /> : <h2 className="text-dark dark:text-white">{home.getDisplayableName()}</h2>}
                    </SimpleLink>
                    <div className="items-center hidden space-x-8 rtl:space-x-reverse lg:flex">
                        {menu?.reverse().map(({node, selected}) => (
                            <SimpleLink key={node.getIdentifier()}
                                        link={node.getUrl()}
                                        ariaLabel={node.getDisplayableName()}
                                        title={node.getDisplayableName()}
                                        label={node.getDisplayableName()}
                                        className={clsx('reversed rounded-md px-3 py-2 text-sm font-medium', {
                                        'bg-blue-900 text-white': selected || mainPath.includes(node.getPath())
                                    }, {
                                        'text-secondary hover:bg-blue-700 hover:text-white dark:text-white': !selected && !mainPath.includes(node.getPath())
                                    })}
                            />

                            ))}
                    </div>
                    <div className="lg:hidden">
                        <HydrateInBrowser child={MobileNav} props={{menuForClient}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

NavMenuDefault.jahiaComponent = {
    nodeType: 'tenet:navMenu',
    displayName: 'Navbar Nav Menu',
    componentType: 'view',
    properties: {
        'cache.mainResource': 'true'
    }
};
