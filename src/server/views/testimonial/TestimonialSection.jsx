import React from 'react';
import {Render, useServerContext, getNodeProps, defineJahiaComponent, AddContentButtons, getChildNodes, RenderInBrowser, HydrateInBrowser} from '@jahia/js-server-core';

import NotificationSample from '@Shared/components/NotificationSample';
import ScrollingTestimonials from '@Hydrated/ScrollingTestimonials';

export const TestimonialSection = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const currentLocale = currentResource.getLocale();
    const currentLocaleCode = currentLocale.getLanguage();
    const direction = currentLocaleCode === 'ar' ? 'rtl' : 'ltr';
    const allChildren = getChildNodes(currentNode, -1);
    const testimonials = [];
    const testimonialsValues = getNodeProps(currentNode, ['title', 'subtitle']);
    const title = testimonialsValues.title;
    const subtitle = testimonialsValues.subtitle;
    if (!renderContext.isEditMode()) {
        for (const testimonial of allChildren) {
            const testimonialValues = getNodeProps(testimonial, ['rating', 'function', 'message', 'character']);
            const testimonialCharacter = getNodeProps(testimonialValues.character, ['name', 'image', 'function']);
            testimonials.push({
                uuid: testimonial.getIdentifier(),
                rating: testimonialValues.rating,
                message: testimonialValues.message,
                fullname: testimonialCharacter.name,
                function: testimonialCharacter.function,
                image: testimonialCharacter?.image?.getUrl(),
                tempId: testimonial.getIdentifier(),
                testimonial: testimonialValues.message,
                by: testimonialCharacter.name,
                imgSrc: testimonialCharacter?.image?.getUrl(),
                id: testimonial.getIdentifier(),
                img: testimonialCharacter?.image?.getUrl(),
                name: testimonialCharacter.name,
                title: testimonialCharacter.function,
                info: testimonialValues.message
            });
        }
    }

    return (
        <>

            <RenderInBrowser child={ScrollingTestimonials} props={{title, subtitle, testimonials, direction}}/>
            {/**
            <HydrateInBrowser child={StaggerTestimonials} props={{testimonials, direction}}/>

            <RenderInBrowser child={StackedCardTestimonials}/>

            {!renderContext.isEditMode() && <HydrateInBrowser child={CarouselTestimonial} props={{testimonials, direction}}/>}
            */}
            {renderContext.isEditMode() && <NotificationSample title="Edit Mode" message="This view in Edit Mode is different than what you will see in Live Rendering. Live Rendering will be based on a Carousel"/>}

            {renderContext.isEditMode() &&
            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {allChildren.map(child =>
                    <Render key={child.getIdentifier()} path={child.getPath()}/>
                )}
            </div>}
            <AddContentButtons/>

        </>
    );
};

TestimonialSection.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:testimonialSection',
    name: 'default',
    componentType: 'view'
});
