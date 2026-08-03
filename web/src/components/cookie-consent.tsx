'use client';

import { Button } from '@nextui-org/button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/modal';
import { useEffect, useState } from 'react';
import { SettingsIcon } from './icons';
import { CookieConsentSettings } from './cookie-consent-settings';
import { useLocale } from 'next-intl';
import { getUiMessages } from '@/lib/ui-messages';

export default function CookieBanner() {
  const messages = getUiMessages(useLocale()).cookie;
  const [showBanner, setShowBanner] = useState(false);
  const [showCookieConsentSettings, setShowCookieConsentSettings] =
    useState(false);

  useEffect(() => {
    const storedCookieConsent = localStorage.getItem('cookie_consent');
    if (!storedCookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAllowCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  const handleSettings = () => {
    setShowBanner(false);
    setShowCookieConsentSettings(true);
  };

  return (
    <>
      <Modal
        isOpen={showBanner}
        placement='bottom'
        onOpenChange={setShowBanner}
        // isDismissable={false}
        // isKeyboardDismissDisabled
        hideCloseButton
        // backdrop='transparent'
      >
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>
            {messages.consentTitle}
          </ModalHeader>
          <ModalBody>
            <p>{messages.description}</p>
          </ModalBody>
          <ModalFooter className='justify-start'>
            <div className='grow'>
              <Button
                variant='flat'
                startContent={<SettingsIcon />}
                onPress={handleSettings}
              >
                {messages.preferences}
              </Button>
            </div>
            <Button
              color='danger'
              variant='light'
              onPress={handleDeclineCookies}
            >
              {messages.decline}
            </Button>
            <Button color='primary' onPress={handleAllowCookies}>
              {messages.acceptAll}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <CookieConsentSettings
        showCookieConsentSettings={showCookieConsentSettings}
        setShowCookieConsentSettings={setShowCookieConsentSettings}
      />
    </>
  );
}
