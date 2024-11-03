import React from 'react';
import {useServerContext, getNodeProps, defineJahiaComponent} from '@jahia/js-server-core';

export const FaqItem = () => {
    const {currentNode} = useServerContext();
    const faq = getNodeProps(currentNode, ['question', 'answer']);
    return (
        <div className="border rounded shadow-sm">
            <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
            >
                <p className="text-lg font-medium">{faq.question}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
              viewBox="0 0 24 24"
              className="w-3 text-gray-600 dark:text-gray-200 transition-transform duration-200 transform rotate-180"
                    >
                        <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
                    </svg>
                </div>
            </button>
            <div className="p-4 pt-0">
                <div className="text-gray-700 dark:text-gray-300">{faq.answer}</div>
            </div>
        </div>
    );
};

FaqItem.jahiaComponent = defineJahiaComponent({
    nodeType: 'tenet:faq',
    name: 'default',
    componentType: 'view'
});
