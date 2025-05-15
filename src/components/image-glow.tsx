import React, { ImgHTMLAttributes, ReactElement, ReactNode } from 'react';
import { JSXElement } from '@babel/types';

const ImageGlow1 = ({ children }: { children: ReactElement<ImgHTMLAttributes<HTMLImageElement>> }) => {
  let imageSrc = '';

  if (React.isValidElement(children) && children.type === 'img' && typeof children.props.src === 'string') {
    imageSrc = children.props.src;
  }

  return (
    <>
      {children}
      <div
        className={`absolute pointer-events-none bg-cover bg-center -z-1`}
        style={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${imageSrc})`,
          filter: 'blur(50px) saturate(2)',
          opacity: 1,
        }}></div>
    </>
  );
};

export default ImageGlow1;
