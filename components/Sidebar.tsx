// components/Sidebar.tsx
import Link from 'next/link';
import {
  PiUserBold,
  PiLockBold,
  PiBellSimple,
  PiMoney,
  PiTag,
  PiUsers,
  PiCloud,
  PiSignOut,
} from 'react-icons/pi';
import {CustomButton} from '@/components/resusables';
import {BiArrowBack} from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className='w-56 bg-white h-full rounded-lg flex flex-col justify-between'>
      <div>
        <div className='p-4 font-bold text-neutral-700 text-xs'>Settings</div>
        <nav className='flex flex-col gap-3'>
          <Link href='/account' passHref>
            <div className='flex gap-2 px-6 py-3 text-neutral-400 text-sm hover:bg-gray-200 cursor-pointer items-center'>
              <PiUserBold />
              Account
            </div>
          </Link>
          <Link href='/security' passHref>
            <div className='flex gap-2 px-6 py-3 text-neutral-400 text-sm hover:bg-gray-200 cursor-pointer items-center'>
              <PiLockBold />
              Security
            </div>
          </Link>
          <Link href='/notifications' passHref>
            <div className='flex gap-2 px-6 py-3 text-neutral-400 text-sm hover:bg-gray-200 cursor-pointer items-center'>
              <PiBellSimple />
              Notifications
            </div>
          </Link>
          <Link href='/pricing' passHref>
            <div className='flex gap-2 px-6 py-3 text-neutral-400 text-sm hover:bg-gray-200 cursor-pointer items-center'>
              <PiMoney />
              Pricing
            </div>
          </Link>
          <Link href='/sales' passHref>
            <div className='flex gap-2 px-6 py-3 text-neutral-400 text-sm hover:bg-gray-200 cursor-pointer items-center'>
              <PiTag />
              Sales
            </div>
          </Link>
          <Link href='/users-roles' passHref>
            <div className='flex gap-2 px-6 py-3 text-neutral-400 text-sm hover:bg-gray-200 cursor-pointer items-center'>
              <PiUsers />
              Users & Roles
            </div>
          </Link>
          <Link href='/backups' passHref>
            <div className='flex gap-2 px-6 py-3 text-neutral-400 text-sm hover:bg-gray-200 cursor-pointer items-center'>
              <PiCloud />
              Backups
            </div>
          </Link>

          <div className=' h-[1px] mx-2 bg-[#F0F2F5]'></div>
        </nav>
      </div>

      <div className='p-4'>
        <CustomButton label='Back to Dashboard' icon={<PiSignOut />} />
      </div>
    </div>
  );
};

export default Sidebar;
