import React from 'react';
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';
import SimpleLink from '@Shared/components/Link/SimpleLink';

const LanguagesMenu = ({clientLocales, currentLocaleName, currentLocaleCode}) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton id="lang-choice" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <div className="flex flex-row gap-1">
                        <span className={`lang-icon lang-icon-${currentLocaleCode}`}/>
                        {currentLocaleName}
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400"/>
                    </div>
                </MenuButton>
            </div>

            <MenuItems
          transition
          className="absolute right-0 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                {clientLocales?.map(item => (item.localeCode !== currentLocaleCode &&
                <MenuItem key={item.label}>
                    {/** <div className="flex flex-row gap-1 text-sm font-semibold text-gray-900"><span className={`lang-icon lang-icon-${item.localeCode}`}/> */}

                    <SimpleLink className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900" link={item.url}><div className="flex flex-row gap-1"><span className={`inline lang-icon lang-icon-${item.localeCode}`}/><span>{item.label}</span></div></SimpleLink>

                    {/** </div> */}
                </MenuItem>
          )
          )}
            </MenuItems>
        </Menu>

    );
};

LanguagesMenu.propTypes = {
    clientLocales: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired,
        localeCode: PropTypes.string

    })),
    currentLocaleName: PropTypes.string,
    currentLocaleCode: PropTypes.string
};

export default LanguagesMenu;
