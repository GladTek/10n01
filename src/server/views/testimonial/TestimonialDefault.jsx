import React from 'react';
import {useServerContext, getNodeProps, defineJahiaComponent} from '@jahia/js-server-core';
import Testimonial from '@Shared/components/Testimonial';
export const TestimonialDefault = () => {
    const {currentNode} = useServerContext();
    const testimonialValues = getNodeProps(currentNode, ['rating', 'function', 'message', 'character']);
    const testimonialCharacter = getNodeProps(testimonialValues.character, ['name', 'image', 'function']);
    // Need to make a better DTO creator,
    const testimonial = {
        uuid: currentNode.getIdentifier(),
        rating: Number(testimonialValues.rating),
        message: testimonialValues.message,
        fullname: testimonialCharacter.name,
        function: testimonialCharacter.function,
        image: testimonialCharacter?.image?.getUrl()
    };

    return (
        <Testimonial testimonial={testimonial}/>
    );
};

TestimonialDefault.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:testimonial',
    name: 'default',
    componentType: 'view'
});
