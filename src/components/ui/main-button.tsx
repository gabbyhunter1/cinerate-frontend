'use client';

import React, { useState } from 'react';

const buttonStyles = {
  primary: `bg-primary dark:hover:bg-secondary hover:text-white text-[#121212]`,
  themeChanging: `bg-primary dark:bg-light-transparent dark:hover:bg-secondary hover:text-white`,
  secondary: `bg-light-transparent dark:hover:bg-secondary hover:text-white`,
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: keyof typeof buttonStyles;
};

const MainButton: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      className={`${buttonStyles[variant]} cursor-pointer px-5 py-2 shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.08)] rounded-xl text-md`}
      {...rest}>
      {children}
    </button>
  );
};

export default MainButton;
