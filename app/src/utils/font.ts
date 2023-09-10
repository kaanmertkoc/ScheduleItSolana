import localFont from '@next/font/local';
export const dmSans = localFont({
  src: [
    {
      path: '../../public/fonts/dm-sans/DMSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/dm-sans/DMSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/dm-sans/DMSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});
