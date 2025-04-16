import React from 'react';
import { CardProps }  from 'app/components/card'

export type CardSectionProps = {
  title: string;
  description?: string;
  children: React.ReactElement<CardProps> | React.ReactElement<CardProps>[];
};

const CardSection: React.FC<CardSectionProps> = ({ title, description = '', children }) => {
  return (
    <section>
        <div className="text-xl font-semibold tracking-tighter">{title}</div>
        {description && <div className="mb-2 font-semibold tracking-tighter">{description}</div>}
        {children}
    </section>
  );
};

export default CardSection