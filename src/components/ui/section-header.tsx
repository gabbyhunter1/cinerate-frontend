import { Dot } from 'lucide-react';
import React, { JSX } from 'react';

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  text: string;
  size?: React.CSSProperties['fontSize'];
};

const SectionHeader: React.FC<HeadingProps> = ({ as: Tag = 'h2', className = 'text-lg', text, size = '1.75rem' }) => {
  return (
    <div className="flex items-center">
      <Dot color="#F5C518" strokeWidth={6} />
      <Tag className={className}>{text}</Tag>
    </div>
  );
};

export default SectionHeader;
