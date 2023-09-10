import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/assets/scheduleLogo.png';

export default function Sidebar() {
  return (
    <div className='flex fixed left-0 bg-sidebarBg w-[248px] h-full flex-col items-start'>
      <Image
        src={logo}
        width={172}
        height={70}
        alt='yo'
        className='self-center mt-2'
      />
    </div>
  );
}
