import clsx from 'clsx';
import {AnimatePresence, motion} from 'framer-motion';
import React, {useState} from 'react';
import {FiPlus} from 'react-icons/fi';
import useMeasure from 'react-use-measure';
import PropTypes from 'prop-types';
export const ClientFaq = ({title, subtitle, tabs, questions}) => {
    const [selected, setSelected] = useState(tabs[0]);

    return (
        <section className="overflow-hidden bg-slate-900 px-4 py-12 text-slate-50">
            <Heading title={title} subtitle={subtitle}/>
            <Tabs selected={selected} setSelected={setSelected} tabs={tabs}/>
            <Questions selected={selected} questions={questions}/>
        </section>
    );
};

ClientFaq.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    tabs: PropTypes.arrayOf(PropTypes.string),
    questions: PropTypes.arrayOf(PropTypes.shape({
        theme: PropTypes.string,
        faqs: PropTypes.arrayOf(PropTypes.shape({
            answer: PropTypes.string,
            question: PropTypes.string
        }))
    }))
};

const Heading = ({title, subtitle}) => {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center">
            <span className="mb-8 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text font-medium text-transparent">
                {subtitle}
            </span>
            <span className="mb-8 text-5xl font-bold">{title}</span>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

const Tabs = ({selected, setSelected, tabs}) => {
    return (
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            {tabs.map(tab => (
                <button key={tab}
                        type="button"
                        className={clsx('relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500', `${
            selected === tab ?
              'border-violet-500 text-slate-50' :
              'border-slate-600 bg-transparent text-slate-400'
          }`)}
                        onClick={() => setSelected(tab)}
                >
                    <span className="relative z-10">{tab}</span>
                    <AnimatePresence>
                        {selected === tab && (
                        <motion.span
                initial={{y: '100%'}}
                animate={{y: '0%'}}
                exit={{y: '100%'}}
                transition={{
                  duration: 0.5,
                  ease: 'backIn'
                }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600"
              />
            )}
                    </AnimatePresence>
                </button>
      ))}
        </div>
    );
};

Tabs.propTypes = {
    selected: PropTypes.string,
    setSelected: PropTypes.func,
    tabs: PropTypes.arrayOf(PropTypes.string)
};

const Questions = ({questions, selected}) => {
    return (
        <div className="mx-auto mt-12 max-w-3xl">
            <AnimatePresence mode="wait">
                {questions.map(question => {
                        const tab = question.theme;
                        const faqs = question.faqs;
                        return selected === tab ? (
                            <motion.div
                            key={tab}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 20}}
                            transition={{
                              duration: 0.5,
                              ease: 'backIn'
                            }}
                            className="space-y-4"
                            >
                                {faqs.map((q, idx) => (
                                    <Question key={idx} {...q}/>
                            ))}
                            </motion.div>
                        ) : undefined;
                    }
                )}
            </AnimatePresence>
        </div>
    );
};

Questions.propTypes = {
    selected: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.shape({
        theme: PropTypes.string,
        faqs: PropTypes.arrayOf(PropTypes.shape({
            answer: PropTypes.string,
            question: PropTypes.string
        }))
    }))
};

const Question = ({question, answer}) => {
    const [ref, {height}] = useMeasure();
    const [open, setOpen] = useState(false);

    return (
        <motion.div
      animate={open ? 'open' : 'closed'}
      className={`rounded-xl border-[1px] border-slate-700 px-4 transition-colors ${
        open ? 'bg-slate-800' : 'bg-slate-900'
      }`}
        >
            <button type="button"
                    className="flex w-full items-center justify-between gap-4 py-4"
                    onClick={() => setOpen(pv => !pv)}
            >
                <span
          className={`text-left text-lg font-medium transition-colors ${
            open ? 'text-slate-50' : 'text-slate-400'
          }`}
                >
                    {question}
                </span>
                <motion.span
          variants={{
            open: {
              rotate: '45deg'
            },
            closed: {
              rotate: '0deg'
            }
          }}
                >
                    <FiPlus
            className={`text-2xl transition-colors ${
              open ? 'text-slate-50' : 'text-slate-400'
            }`}
          />
                </motion.span>
            </button>
            <motion.div
        initial={false}
        animate={{
          height: open ? height : '0px',
          marginBottom: open ? '24px' : '0px'
        }}
        className="overflow-hidden text-slate-400"
            >
                <div ref={ref} dangerouslySetInnerHTML={{__html: answer}}/>
            </motion.div>
        </motion.div>
    );
};

Question.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
};

export default ClientFaq;
