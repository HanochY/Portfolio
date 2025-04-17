import React from 'react';
import Icon  from 'components/icon'

export type CardProps = {
  title: string;
  imageSource: string;
  alt?: string; 
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, imageSource, alt = '', children }) => {
  return (
    <div className="flex items-start gap-4 p-2 rounded-lg shadow">
      <div className="p-4">
      <Icon src={imageSource} alt={alt}/>
      </div>
      <div className="flex flex-col justify-center p-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;