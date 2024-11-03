import React, {useEffect, useRef} from 'react';
import {WidgetInstance} from 'friendly-challenge';
import i18next from 'i18next';
const FriendlyCaptcha = ({siteKey}) => {
    const language = i18next.language;
    const container = useRef();
    const widget = useRef();

    const doneCallback = solution => {
        console.log('Captcha was solved. The form can be submitted.');
        console.log(solution);
    };

    const errorCallback = err => {
        console.log('There was an error when trying to solve the Captcha.');
        console.log(err);
    };

    useEffect(() => {
        if (!widget.current && container.current) {
            widget.current = new WidgetInstance(container.current, {
                startMode: 'none', // On first focus
                doneCallback: doneCallback,
                errorCallback: errorCallback,
                language: language // Default is "en". Change this if you prefer other language.
            });
        }

        return () => {
            if (widget.current !== undefined) {
                widget.current.reset();
            }
        };
    }, [container]);

    return (
        <div
      ref={container}
      className="frc-captcha my-2"
      data-sitekey={siteKey}
    />
    );
};

export default FriendlyCaptcha;

