// components/Layout.tsx
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import {ReactNode} from 'react';
import DynamicBreadcrumb from './DynamicBreadcrumb';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className='h-screen flex flex-col bg-gray-100'>
      <Navbar />
      <div className='flex flex-1 pl-6 pr-8 py-5 overflow-hidden'>
        <Sidebar />
        <main className='flex-1 px-6 overflow-y-auto'>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
