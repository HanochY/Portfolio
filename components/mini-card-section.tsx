import React from 'react';
import { MiniCardProps }  from 'components/mini-card'

export type MiniCardSectionProps = {
  title: string;
  children: React.ReactElement<MiniCardProps> | React.ReactElement<MiniCardProps>[];
};

const MiniCardSection: React.FC<MiniCardSectionProps> = ({ title, children }) => {
  return (
    <section>
        <div className="text-xl font-semibold tracking-tighter flex-wrap">{title}</div>
        <div className='flex flex-wrap'>
        {children}
        </div>
    </section>
  );
};

export default MiniCardSection