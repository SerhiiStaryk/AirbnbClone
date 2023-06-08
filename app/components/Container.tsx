'use client';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        px-4
        sm:px-2
        mx-auto
        xl:px-20
        md:px-10
        max-w-[250]
    "
    >
      {children}
    </div>
  );
};

export default Container;
