import {AnimatePresence, motion} from 'framer-motion';
import React, {useState} from 'react';
import FriendlyCaptcha from './FriendlyCaptcha';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import {SATOR, PROTAGONIST} from '@Shared/constants';
import DialogIconCancelConfirm from '@Shared/components/DialogIconCancelConfirm';
const ShiftingContactForm = ({redImage, blueImage, siteKey}) => {
    const [selected, setSelected] = useState(PROTAGONIST);
    return (
        <section className="p-4 bg-slate-100">
            <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
                <Form selected={selected} setSelected={setSelected} siteKey={siteKey}/>
                <Images selected={selected} redImage={redImage} blueImage={blueImage}/>
            </div>
        </section>
    );
};

ShiftingContactForm.propTypes = {
    siteKey: PropTypes.string,
    redImage: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
    }).isRequired,
    blueImage: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
    }).isRequired
};

const Form = ({selected, setSelected, siteKey}) => {
    const [show, setShow] = useState(false);
    const {t} = useTranslation();
    const requiredWhy = selected === SATOR;
    let dialogText = 'Here you can call an axios, mutation, method.<br> Waiting for more with server actions';

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const payload = Object.fromEntries(formData);
        setShow(true);
        //- console.log(payload);
    };

    return (
        <>
            <form className={`p-8 w-full text-white transition-colors duration-[750ms] ${
        selected === SATOR ? 'bg-indigo-600' : 'bg-red-600'
      }`}
                  onSubmit={handleSubmit}
            >
                <h3 className="text-4xl font-bold mb-6">{t('contact.title')}</h3>

                {/* Name input */}
                <div className="mb-6">
                    <p className="text-2xl mb-2">{t('contact.name')}</p>
                    <input required
                           name="name"
                           type="text"
                           placeholder={t('contact.name-placeholder')}
                           className={`${
            selected === SATOR ? 'bg-indigo-700' : 'bg-red-700'
          } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
                </div>

                {/* sator/protagonist toggle */}
                <div className="mb-6">
                    <p className="text-2xl mb-2">{t('contact.represent')}</p>
                    <FormSelect selected={selected} setSelected={setSelected}/>
                </div>

                {/* sator name */}
                <AnimatePresence>
                    {selected === SATOR && (
                    <motion.div
            initial={{
              // 104 === height of element + margin
              // Alternatively can use mode='popLayout' on AnimatePresence
              // and add the "layout" prop to relevant elements to reduce
              // distortion
              marginTop: -104,
              opacity: 0
            }}
            animate={{
              marginTop: 0,
              opacity: 1
            }}
            exit={{
              marginTop: -104,
              opacity: 0
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
                    >
                        <p className="text-2xl mb-2">{t('contact.why.title')}</p>
                        <input required={requiredWhy}
                               name="why"
                               type="text"
                               placeholder={t('contact.why.answer')}
                               className={`${
                selected === SATOR ? 'bg-indigo-700' : 'bg-red-700'
              } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
            />
                    </motion.div>
        )}
                </AnimatePresence>

                {/* Info */}
                <div className="mb-6">
                    <p className="text-2xl mb-2">{t('contact.ask')}</p>
                    <textarea required
                              name="question"
                              placeholder={t('contact.ask-placeholder')}
                              className={`${
            selected === SATOR ? 'bg-indigo-700' : 'bg-red-700'
          } transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
                </div>
                {siteKey &&
                <FriendlyCaptcha siteKey={siteKey}/>}

                {/* Submit */}
                <motion.button
        whileHover={{
          scale: 1.01
        }}
        whileTap={{
          scale: 0.99
        }}
        type="submit"
        className={`${
          selected === SATOR ?
            'bg-white text-indigo-600' :
            'bg-white text-red-600'
        } transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold`}
                >
                    {t('contact.submit')}
                </motion.button>
            </form>
            {show &&
            <DialogIconCancelConfirm title="This is just a demo" text={dialogText} confirmLabel="Confirm" confirmMethod={() => setShow(false)}/>}
        </>
    );
};

Form.propTypes = {
    selected: PropTypes.string,
    setSelected: PropTypes.func,
    siteKey: PropTypes.string
};

const FormSelect = ({selected, setSelected}) => {
    const {t} = useTranslation();
    return (
        <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit">
            <button type="button"
                    className={`${
          selected === PROTAGONIST ? 'text-red-600' : 'text-white'
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
                    onClick={() => setSelected(PROTAGONIST)}
            >
                <span className="relative z-10">{t('contact.team-protagonist')}</span>
                {selected === PROTAGONIST && (
                <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
            </button>
            <button type="button"
                    className={`${
          selected === SATOR ? 'text-indigo-600' : 'text-white'
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
                    onClick={() => setSelected(SATOR)}
            >
                <span className="relative z-10">{t('contact.team-sator')}</span>
                {selected === SATOR && (
                <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
            </button>
        </div>
    );
};

FormSelect.propTypes = {
    selected: PropTypes.string,
    setSelected: PropTypes.func
};

const Images = ({redImage, blueImage, selected}) => {
    const redImageUrl = 'url(' + redImage.src + ')';
    const blueImageUrl = 'url(' + blueImage.src + ')';
    return (
        <div className="bg-white relative overflow-hidden w-full min-h-[100px]">
            <motion.div
        initial={false}
        animate={{
          x: selected === PROTAGONIST ? '0%' : '100%'
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            redImageUrl,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
            <motion.div
        initial={false}
        animate={{
          x: selected === SATOR ? '0%' : '-100%'
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
          blueImageUrl,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
        </div>
    );
};

Images.propTypes = {
    selected: PropTypes.string
};

export default ShiftingContactForm;

const BASE_TRANSITION = {ease: 'anticipate', duration: 0.75};
