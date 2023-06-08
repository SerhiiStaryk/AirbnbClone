'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div>
      <Image
        alt="logo"
        width="100"
        height="100"
        src="/images/logo.png"
        className="hidden md:block cursor-pointer"
      />
    </div>
  );
};

export default Logo;
