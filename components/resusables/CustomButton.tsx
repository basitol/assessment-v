// components/CustomButton.tsx
'use client';

import React from 'react';
import {useRouter} from 'next/navigation';

interface CustomButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({label, icon, onClick}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push('/');
    }
  };

  return (
    <button
      onClick={handleClick}
      className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-600 border border-black rounded-md hover:bg-gray-100'>
      {icon}
      {label}
    </button>
  );
};

export default CustomButton;
