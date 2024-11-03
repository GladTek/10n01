import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {FingerPrintIcon} from '@heroicons/react/24/outline';
import DialogIconCancelConfirm from '@Shared/components/DialogIconCancelConfirm';
import {useTranslation} from 'react-i18next';
const CookieConsent = () => {
    const [cookies, setCookie] = useCookies(['cookieConsent']);
    const [click, setClick] = useState(false);
    const [show, setShow] = useState(false);
    const giveCookieConsent = () => {
        setCookie('cookieConsent', true, {path: '/'});
        setClick(!click);
    };

    const refuseCookieConsent = () => {
        setCookie('cookieConsent', false, {path: '/'});
        setClick(!click);
    };

    useEffect(() => {
        if (!cookies.cookieConsent) {
            setShow(true);
        }

        if (typeof cookies.cookieConsent === 'undefined') {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [click]);

    const {t} = useTranslation();

    return (
        <>
            {show &&
            <DialogIconCancelConfirm title={t('cookies.title')}
                                     text={t('cookies.text')}
                                     cancelLabel={t('cookies.button.cancel')}
                                     confirmLabel={t('cookies.button.confirm')}
                                     cancelMethod={refuseCookieConsent}
                                     confirmMethod={giveCookieConsent}
                                     icon={<FingerPrintIcon aria-hidden="true" className="h-6 w-6 text-blue-600"/>}
                                     />}
        </>
    );
};

export default CookieConsent;

