'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/assets/scheduleLogo.png';
import homeLogo from '../../../../public/assets/home.png';
import a from '../../../../public/assets/transfer.png';
import marketLogo from '../../../../public/assets/wallet.png';
import NavItem from './NavItem';

const sidebarItems = [
  {
    title: 'Home',
    iconSrc: homeLogo,
  },
  {
    title: 'Schedules',
    iconSrc: marketLogo,
  },
  {
    title: 'Market',
    iconSrc: a,
  },
];

export default function Sidebar() {
  return (
    <div className='flex fixed left-0 bg-sidebarBg w-[248px] h-full flex-col items-start'>
      <>
        <Image
          src={logo}
          width={172}
          height={70}
          alt='yo'
          className='self-center mt-2'
        />

        <div className='mt-14' />
        {sidebarItems.map((item, index) => (
          <NavItem
            key={index}
            iconSrc={item.iconSrc}
            title={item.title}
            isSelected
          />
        ))}

        <div
          className='w-[200px] h-[48px] self-center rounded-xl absolute bottom-24 flex flex-col items-center justify-center'
          style={{
            background:
              'linear-gradient(90deg, #455EFF -26.75%, #B33BF6 41.2%, #FF5F14 108.26%)',
          }}
        >
          <p className='font-bold text-base'>Create a Schedule</p>
        </div>
      </>
    </div>
  );
}
