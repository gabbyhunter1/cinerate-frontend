import React from 'react';
import { Bookmark, User } from 'lucide-react';
import NavbarItemsWrapper from '@/app/[locale]/_components/navbar-layout/navbar-items-wrapper';
import Image from 'next/image';
import MobileMenu from '@/app/[locale]/_components/navbar-layout/mobile-nav-dropdown';
import LocaleSwitcher from '@/app/[locale]/_components/locale-switch/locale-switcher';
import { ModeToggle } from '@/app/[locale]/_components/ui/theme-switch-button';
import { getTranslations } from 'next-intl/server';
import { SearchBar } from '@/app/[locale]/_components/ui/search';
import Link from 'next/link';

const Navbar = async () => {
  const t = await getTranslations('Navbar');

  return (
    <nav className="bg-navbar-bg sticky top-0 left-0 w-full z-90 text-whiteText mb-8">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 md:gap-7 items-center h-16">
        {/* Left Section */}
        <div className="flex gap-2 items-center justify-between">
          <div className="relative w-[61px]">
            <Link href="/" scroll={false}>
              <Image src="/logo.svg" alt="Cinerate logo" width={61} height={31} priority />
            </Link>
          </div>
          <MobileMenu />
        </div>

        {/* Desktop Menu Links */}
        <NavbarItemsWrapper />

        {/* Center Search */}
        <SearchBar />

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
            <Bookmark size={18} />
            <a href="#">{t('Watchlist')}</a>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
            <User size={18} />
            <a href="#">{t('User')}</a>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
            <LocaleSwitcher />
          </div>
          <div className="cursor-pointer">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
