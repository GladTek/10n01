import {motion} from 'framer-motion';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
    FiChevronLeft,
    FiChevronRight,
    FiInfo
} from 'react-icons/fi';

const CollapseCardFeatures = ({features, direction}) => {
    const {t} = useTranslation();
    const [position, setPosition] = useState(0);

    const shiftLeft = () => {
        if (position > 0) {
            setPosition(pv => pv - 1);
        }
    };

    const shiftRight = () => {
        if (position < features.length - 1) {
            setPosition(pv => pv + 1);
        }
    };

    return (
        <section className="overflow-hidden bg-neutral-100 px-4 py-12" dir="ltr">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex justify-between gap-4" dir={direction}>
                    <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl">
                        {t('section.skills.weregood')} <span className="text-neutral-400">{t('section.skills.why')}</span>
                    </h2>
                    <div className="flex rtl:flex-row-reverse gap-2">
                        <button type="button"
                                className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
                                onClick={shiftLeft}
                        >
                            <FiChevronLeft/>
                        </button>
                        <button type="button"
                                className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
                                onClick={shiftRight}
                        >
                            <FiChevronRight/>
                        </button>
                    </div>
                </div>
                <div className="flex gap-4">
                    {features.map((feat, index) => (
                        <Feature {...feat} key={index} position={position} index={index} direction={direction}/>
          ))}
                </div>
            </div>
        </section>
    );
};

const Feature = ({position, index, title, description, direction}) => {
    const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

    return (
        <motion.div dir={direction}
                    animate={{x: `${-translateAmt}%`}}
                    transition={{
        ease: 'easeInOut',
        duration: 0.35
      }}
                    className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
        index % 2 ? 'bg-black text-white' : ' bg-white'
      }`}
        >
            <FiInfo className={`absolute  ${direction === 'rtl' ? 'left-2' : 'right-2'}  top-2 text-7xl opacity-20`}/>
            <h3 className="mb-8 text-3xl font-bold">{title}</h3>
            <div dangerouslySetInnerHTML={{__html: description}}/>
        </motion.div>
    );
};

export default CollapseCardFeatures;
