import React from 'react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

type NavItemProps = {
  title: string;
  dropdownItems: string[];
  isOpen: boolean;
  iconPath: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const NavItem: React.FC<NavItemProps> = ({ title, dropdownItems, isOpen, iconPath, onMouseEnter, onMouseLeave }) => {
  const midpoint = Math.ceil(dropdownItems.length / 2);
  const column1 = dropdownItems.slice(0, midpoint);
  const column2 = dropdownItems.slice(midpoint);

  const t = useTranslations();

  return (
    <div className="group" onMouseEnter={onMouseEnter}>
      <button className=" hover:text-primary transition-colors" onFocus={onMouseEnter}>
        {title}
      </button>

      {/* Dropdown with Animation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? '405px' : 0 }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute top-full left-0 right-0 z-30 bg-black text-white flex justify-center items-center overflow-hidden"
        onMouseLeave={onMouseLeave}
        onBlur={e => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            onMouseLeave();
          }
        }}>
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 grid-flow-col gap-x-25">
          <div className="grid grid-cols-2 gap-x-30 justify-self-start">
            <div className="flex flex-col gap-5">
              {column1.map(item => (
                <a key={item} href="#" className="hover:text-primary whitespace-nowrap">
                  {t(item)}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {column2.map(item => (
                <a key={item} href="#" className="hover:text-primary whitespace-nowrap">
                  {t(item)}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-2 justify-self-end flex items-center">
            <img src={iconPath} alt="icon" loading={'lazy'} width={256} height={256} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavItem;
