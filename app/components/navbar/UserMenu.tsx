'use client';

import { SafeUser } from '@/app/types';
import { useState, useCallback } from 'react';
// icons
import { AiOutlineMenu } from 'react-icons/ai';
// components
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
// hooks
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div
        className="
          flex
          gap-3
          flex-row
          items-center
        "
      >
        <div
          onClick={() => {}}
          className="
            py-3
            px-4
            hidden
            text-sm
            md:block
            transition
            rounded-full
            font-semibold
            cursor-pointer
            hover:bg-neutral-100
          "
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="
            p-4
            flex
            gap-3
            md:py-1
            md:px-2
            flex-row
            transition
            border-[1px]
            items-center
            rounded-full
            cursor-pointer
            border-neutral-200
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            top-12
            md:w-3/4
            right-0
            text-sm
            absolute
            w-[40vw]
            bg-white
            shadow-md
            rounded-xl
            overflow-hidden
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My trips" />
                <MenuItem onClick={() => {}} label="My favorites" />
                <MenuItem onClick={() => {}} label="My reservations" />
                <MenuItem onClick={() => {}} label="My properties" />
                <MenuItem onClick={() => {}} label="Airbnb home" />
                <hr />
                <MenuItem onClick={signOut} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
