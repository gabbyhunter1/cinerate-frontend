import { Dot } from 'lucide-react';
import { CSSProperties, FC, JSX, ReactNode } from 'react';

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  text: string;
  size?: CSSProperties['fontSize'];
  button?: ReactNode;
  children?: ReactNode;
};

const SectionHeader: FC<HeadingProps> = ({ as: Tag = 'h2', className = 'text-lg', text, size = '1.75rem', children }) => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center">
        <Dot color="#F5C518" strokeWidth={6} />
        <Tag className={className}>{text}</Tag>
      </div>
      {children ? children : null}
    </div>
  );
};

export default SectionHeader;
