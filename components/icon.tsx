import Image from 'next/image';

export type IconProps = {
  src: string;
  alt?: string;
};

const Icon: React.FC<IconProps> = ({ src, alt = '' }) => {
  return (
      <Image
        src={src}
        width={64}
        height={64}
        alt={alt}
        className="object-contain"
      />
  );
};

export default Icon;

