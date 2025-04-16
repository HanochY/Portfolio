import React from 'react';
import { MiniCardProps }  from 'app/components/mini-card'

export type MiniCardSectionProps = {
  title: string;
  children: React.ReactElement<MiniCardProps> | React.ReactElement<MiniCardProps>[];
};

const MiniCardSection: React.FC<MiniCardSectionProps> = ({ title, children }) => {
  return (
    <section>
        <div className="text-xl font-semibold tracking-tighter">{title}</div>
        <div className='flex'>
        {children}
        </div>
    </section>
  );
};

export default MiniCardSection