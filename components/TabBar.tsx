// components/TabBar.tsx
'use client';
import {useState} from 'react';

interface TabBarProps {
  tabs: string[];
  onTabClick: (tab: string) => void;
  activeTab: string;
}

const TabBar: React.FC<TabBarProps> = ({tabs, onTabClick, activeTab}) => {
  return (
    <div className='flex border-b'>
      {tabs.map(tab => (
        <button
          key={tab}
          className={`px-4 py-2 -mb-px font-medium text-sm transition-colors duration-300 focus:outline-none ${
            activeTab === tab
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500'
          }`}
          onClick={() => onTabClick(tab)}>
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
