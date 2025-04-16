import React from 'react';
import MiniIcon  from 'app/components/mini-icon'

export type MiniCardProps = {
  title: string;
  imageSource: string;
  alt?: string; 
};

const MiniCard: React.FC<MiniCardProps> = ({ title, imageSource, alt = '' }) => {
  return (
    <div className="flex justify-left items-center gap-2 p-4 pl-2 rounded-lg shadow ">
      <div className="">
      <MiniIcon src={imageSource} alt={alt}/>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default MiniCard;