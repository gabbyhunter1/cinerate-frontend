'use client';

import React, { useState } from 'react';
import NavItem from '@/app/[locale]/_components/navbar-layout/navitem';
import navItems from '@/data/navItems.json';
import { useTranslations } from 'next-intl';

const NavbarItemsWrapper = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations();
  // const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
  //   duration: 1000, // Optional: adjust animation duration
  // });

  return (
    <div>
      <div className="hidden xl:flex items-center">
        {/*<button ref={ref} onClick={toggleSwitchTheme}>*/}
        {/*  Toggle Dark Mode (Currently {isDarkMode ? 'Dark' : 'Light'} Mode)*/}
        {/*</button>*/}
        {/* Desktop Menu Links */}
        <div className="flex space-x-6">
          {/* Nav Items */}
          {navItems.map(item => (
            <NavItem
              key={item._id}
              title={t(item.title)}
              dropdownItems={item.dropdownItems}
              isOpen={openIndex === item._id}
              iconPath={item.iconPath}
              onMouseEnter={() => setOpenIndex(item._id)}
              onMouseLeave={() => setOpenIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarItemsWrapper;
