'use client';

import Image from 'next/image';

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div>
      <Image
        width={30}
        height={30}
        alt="avatar"
        className="rounded-full"
        src={src || '/images/placeholder.jpg'}
      />
    </div>
  );
};

export default Avatar;
