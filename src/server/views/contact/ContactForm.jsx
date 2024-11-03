import React from 'react';
import {useServerContext, defineJahiaComponent, getNodeFromPathOrId, getNodeProps, buildUrl, server} from '@jahia/js-server-core';
import {HydrateInBrowser} from '@jahia/js-server-core';

import ShiftingContactForm from '@Hydrated/ShiftingContactForm';

export const ContactForm = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const modulePath = renderContext.getURLGenerator().getCurrentModule();

    // - renderContext.getSite() doesn't give path neither the node
    const sitePath = '/sites/' + currentNode.getResolveSite().getSiteKey();
    const siteNode = getNodeFromPathOrId({path: sitePath}, currentNode.getSession());
    let siteKey = '';
    if (siteNode.isNodeType('tenet:friendlyCaptchaConfig')) {
        siteKey = siteNode.getPropertyAsString('friendlyCaptchaKey');
    }

    const contactForm = getNodeProps(currentNode, ['redTeamPic', 'blueTeamPic']);
    const redTeamPic = contactForm.redTeamPic;
    const blueTeamPic = contactForm.blueTeamPic;
    const redImage = {
        src: buildUrl({value: `${modulePath}/assets/img/defaultplaceholder.jpg`}, renderContext, currentResource),
        alt: 'Placeholder'
    };

    const blueImage = {
        src: buildUrl({value: `${modulePath}/assets/img/defaultplaceholder.jpg`}, renderContext, currentResource),
        alt: 'Placeholder'
    };

    if (redTeamPic) {
        redImage.src = redTeamPic.getUrl();
        redImage.alt = 'Red Team';
        server.render.addCacheDependency({node: redTeamPic}, renderContext);
    }

    if (blueTeamPic) {
        blueImage.src = blueTeamPic.getUrl();
        blueImage.alt = 'Blue Team';
        server.render.addCacheDependency({node: blueTeamPic}, renderContext);
    }

    return (
        <HydrateInBrowser child={ShiftingContactForm} props={{redImage, blueImage, siteKey}}/>
    );
};

ContactForm.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:contactForm',
    name: 'default',
    componentType: 'view'
});
