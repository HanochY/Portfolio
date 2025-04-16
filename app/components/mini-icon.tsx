import Image from 'next/image';
import { IconProps } from './icon';


const MiniIcon: React.FC<IconProps> = ({ src, alt = '' }) => {
  return (
      <Image
        src={src}
        width={16}
        height={16}
        alt={alt}
      />
  );
};

export default MiniIcon;

