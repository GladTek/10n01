import {motion} from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@Shared/components/Rating';
const ScrollingTestimonials = ({title, subtitle, direction = 'ltr', testimonials}) => {
    var thirdLength = Math.ceil(testimonials.length / 3);
    var secondThirdLength = Math.ceil(testimonials.length * 2 / 3);
    var leftSide = testimonials.slice(0, thirdLength);
    var halfSide = testimonials.slice(thirdLength, secondThirdLength);
    var lastSide = testimonials.slice(secondThirdLength, testimonials.length);
    return (
        <div className="bg-slate-950 py-12" dir="ltr">
            <div className="mb-8 px-4">
                <h3 className="text-slate-50 text-4xl font-semibold text-center">
                    {title}
                </h3>
                <p className="text-center text-slate-300 text-sm mt-2 max-w-lg mx-auto">
                    {subtitle}
                </p>
            </div>
            <div className="p-4 overflow-x-hidden relative">
                <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent"/>

                <div className="flex items-center mb-4">
                    <TestimonialList list={leftSide} duration={125} direction={direction}/>
                    <TestimonialList list={leftSide} duration={125} direction={direction}/>
                    <TestimonialList list={leftSide} duration={125} direction={direction}/>
                </div>
                <div className="flex items-center mb-4">
                    <TestimonialList reverse list={halfSide} duration={75} direction={direction}/>
                    <TestimonialList reverse list={halfSide} duration={75} direction={direction}/>
                    <TestimonialList reverse list={halfSide} duration={75} direction={direction}/>
                </div>
                <div className="flex items-center">
                    <TestimonialList list={lastSide} duration={275} direction={direction}/>
                    <TestimonialList list={lastSide} duration={275} direction={direction}/>
                    <TestimonialList list={lastSide} duration={275} direction={direction}/>
                </div>

                <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-900 to-transparent"/>
            </div>
        </div>
    );
};

const TestimonialList = ({list, reverse = false, duration = 50, direction}) => {
    return (
        <motion.div
      initial={{translateX: reverse ? '-100%' : '0%'}}
      animate={{translateX: reverse ? '0%' : '-100%'}}
      transition={{duration, repeat: Infinity, ease: 'linear'}}
      className="flex gap-4 px-2"
        >
            {list.map(t => {
        return (
            <div key={t.id}
                 dir={direction}
                 className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
            >
                <img loading="lazy" alt={t.name} src={t.img} className="w-full h-44 object-cover"/>
                <div className="bg-slate-900 text-slate-50 p-4">
                    <span className="block font-semibold text-lg mb-1">{t.name}</span>
                    <span className="block mb-3 text-sm font-medium">{t.title}</span>
                    <Rating rating={t.rating}/>
                    <span dangerouslySetInnerHTML={{__html: t.info}} className="block text-sm text-slate-300"/>
                </div>
            </div>
        );
      })}
        </motion.div>
    );
};

ScrollingTestimonials.propTypes = {
    testimonials: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        function: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })),
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    direction: PropTypes.string
};

export default ScrollingTestimonials;
