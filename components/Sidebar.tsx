import Link from 'next/link';
import {usePathname} from 'next/navigation';
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
  const pathname = usePathname();

  const navItems = [
    {href: '/account', icon: PiUserBold, label: 'Account'},
    {href: '/security', icon: PiLockBold, label: 'Security'},
    {href: '/notifications', icon: PiBellSimple, label: 'Notifications'},
    {href: '/pricing', icon: PiMoney, label: 'Pricing'},
    {href: '/sales', icon: PiTag, label: 'Sales'},
    {href: '/settings', icon: PiUsers, label: 'Users & Roles'},
    {href: '/backups', icon: PiCloud, label: 'Backups'},
  ];

  return (
    <div className='w-56 bg-white h-full rounded-lg flex flex-col justify-between'>
      <div>
        <div className='p-4 font-bold text-neutral-700 text-xs'>Settings</div>
        <nav className='flex flex-col gap-3'>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} passHref>
              <div
                className={`flex gap-2 px-6 py-3 text-sm items-center cursor-pointer ${
                  pathname === item.href
                    ? 'bg-blue-50 text-blue-600 mx-2 rounded-6px'
                    : 'text-neutral-400 hover:bg-gray-200'
                }`}>
                <item.icon />
                {item.label}
              </div>
            </Link>
          ))}
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
