'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import navItems from '@/data/navItems.json';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/app/[locale]/_components/locale-switch/locale-switcher';
import { ModeToggle } from '@/app/[locale]/_components/ui/theme-switch-button';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const setButtonClass = (id: number) => {
    return activeButton === id ? 'flex items-center cursor-pointer text-primary' : 'flex items-center cursor-pointer';
  };

  const t = useTranslations();

  return (
    <div className="xl:hidden order-first cursor-pointer">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (openDropdown !== null) {
            setOpenDropdown(null);
          }
        }}
        className="p-2 rounded-md">
        {isOpen ? <X className="text-gray-200" /> : <Menu className="text-gray-200" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 bg-black shadow-lg px-9 pb-4">
            <ul className="flex flex-col gap-3 text-left">
              {navItems.map(item => (
                <li key={item._id}>
                  <>
                    <button
                      onClick={() => {
                        if (openDropdown === item._id) {
                          setOpenDropdown(null);
                          setActiveButton(null);
                        } else {
                          setOpenDropdown(item._id);
                          setActiveButton(item._id);
                        }
                      }}
                      className={setButtonClass(item._id)}>
                      {t(item.title)}
                      {openDropdown === item._id ? (
                        <ChevronDown size={20} className="text-gray-200" />
                      ) : (
                        <ChevronRight size={20} className="text-gray-200" />
                      )}
                    </button>
                  </>
                  <AnimatePresence>
                    {openDropdown === item._id && item.dropdownItems && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href="#" className="text-sm hover:text-primary">
                              {t(subItem)}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
              <li>
                <a>{t('Navbar.Watchlist')}</a>
              </li>
              <li>
                <LocaleSwitcher />
              </li>
              <ModeToggle />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
