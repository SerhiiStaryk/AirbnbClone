'use client';

import Image from 'next/image';

const Avatar = () => {
  return (
    <div>
      <Image
        width={30}
        height={30}
        alt="avatar"
        className="rounded-full"
        src="/images/placeholder.jpg"
      />
    </div>
  );
};

export default Avatar;
