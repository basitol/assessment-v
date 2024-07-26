import Image from 'next/image';
import logo from '@/public/logo.svg';
import {Input} from '@/components/ui/input';
import Link from 'next/link';
import {PiBellSimple, PiQuestion, PiWallet} from 'react-icons/pi';
import {SlSettings} from 'react-icons/sl';
import {Menu} from '@headlessui/react';
import {Fragment} from 'react';
import avatar from '@/public/images/avatar.png'; // Replace with your avatar image path

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-9 py-5 border bg-white shadow-sm'>
      <div className='flex items-center gap-6 w-1/2'>
        <Link href='/'>
          <Image src={logo} alt='logo' width={40} height={40} />
        </Link>
        <Input
          type='text'
          placeholder='Search here...'
          className='px-4 py-2 border rounded-md w-full bg-gray-200'
        />
      </div>
      <div className='flex items-center gap-6'>
        <Link href='/notifications'>
          <div className='flex flex-col items-center text-gray-600 hover:text-gray-800 cursor-pointer'>
            <PiBellSimple size={24} />
            <span className='text-xs'>Notifications</span>
          </div>
        </Link>
        <Link href='/wallet'>
          <div className='flex flex-col items-center text-gray-600 hover:text-gray-800 cursor-pointer'>
            <PiWallet size={24} />
            <span className='text-xs'>Wallet</span>
          </div>
        </Link>
        <Link href='/help'>
          <div className='flex flex-col items-center text-gray-600 hover:text-gray-800 cursor-pointer'>
            <PiQuestion size={24} />
            <span className='text-xs'>Help</span>
          </div>
        </Link>
        <Link href='/settings'>
          <div className='flex flex-col items-center text-gray-600 hover:text-gray-800 cursor-pointer'>
            <SlSettings size={24} />
            <span className='text-xs'>Settings</span>
          </div>
        </Link>

        <Menu as='div' className='relative'>
          <Menu.Button className='flex items-center'>
            <Image
              src={avatar}
              alt='avatar'
              width={40}
              height={40}
              className='rounded-full'
            />
          </Menu.Button>
          <Menu.Items className='absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg'>
            <Menu.Item>
              {({active}) => (
                <Link href='/profile'>
                  <div
                    className={`block px-4 py-2 ${
                      active ? 'bg-gray-100' : ''
                    }`}>
                    Profile
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) => (
                <Link href='/settings'>
                  <div
                    className={`block px-4 py-2 ${
                      active ? 'bg-gray-100' : ''
                    }`}>
                    Settings
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) => (
                <Link href='/logout'>
                  <div
                    className={`block px-4 py-2 ${
                      active ? 'bg-gray-100' : ''
                    }`}>
                    Logout
                  </div>
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
