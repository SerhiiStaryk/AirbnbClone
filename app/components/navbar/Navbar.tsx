'use client';

// components
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import Container from '../Container';

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
              flex
              gap-3
              flex-row
              md:gap-0
              items-center
              justify-between
            "
          >
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;