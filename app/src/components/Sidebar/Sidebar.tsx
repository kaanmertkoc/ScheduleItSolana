import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/assets/scheduleLogo.png';
import homeLogo from '../../../../public/assets/home.png';
import scheduleLogo from '../../../../public/assets/transfer.png';
import marketLogo from '../../../../public/assets/wallet.png';
import NavItem from './NavItem';

export default function Sidebar() {
  const sidebarItems = [
    {
      title: 'Home',
      iconSrc: homeLogo,
    },
    {
      title: 'Schedules',
      iconSrc: scheduleLogo,
    },
    {
      title: 'Market',
      iconSrc: marketLogo,
    },
  ];

  return (
    <div className='flex fixed left-0 bg-sidebarBg w-[248px] h-full flex-col items-start'>
      <Image
        src={logo}
        width={172}
        height={70}
        alt='yo'
        className='self-center mt-2'
      />

      <div className='mt-14' />
      {sidebarItems.map((item) => (
        <NavItem iconSrc={item.iconSrc} title={item.title} isSelected />
      ))}
    </div>
  );
}
