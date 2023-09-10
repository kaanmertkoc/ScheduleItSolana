import Image, { StaticImageData } from 'next/image';
import React from 'react';

type NavItemProps = {
  title: string;
  iconSrc: StaticImageData;
  isSelected: boolean;
};

export default function NavItem({ title, iconSrc }: NavItemProps) {
  return (
    <div className='w-[200px] h-[48px] bg-bgAlt mb-6 rounded-xl self-center'>
      <Image
        src={iconSrc}
        width={24}
        height={24}
        alt='yo'
        className='self-center mt-3 ml-6 '
      />
    </div>
  );
}
