'use client';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

const buttonStyles = {
  primary: `bg-primary dark:hover:bg-secondary hover:text-white text-[#121212]`,
  themeChanging: `bg-primary dark:bg-light-transparent dark:hover:bg-secondary hover:text-white`,
  secondary: `bg-light-transparent dark:hover:bg-secondary hover:text-white`,
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
};

const MainButton: FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
  return (
    <button
      className={`${buttonStyles[variant]} cursor-pointer px-5 py-2 shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.08)] rounded-xl text-md`}
      {...rest}>
      {children}
    </button>
  );
};

export default MainButton;
