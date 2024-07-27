'use client';

import Layout from '@/components/Layout';
import {useState} from 'react';
import {columns} from './columns';
import {DataTable} from './data-table';
import {useUserContext} from '@/contexts/UserContext';
import TabBar from '@/components/TabBar';
import Breadcrumb from '@/components/Breadcrumb';

const UsersRoles = () => {
  const {users, loading, error} = useUserContext();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Users');

  const filteredUsers = users?.filter(user =>
    user.name?.toLowerCase().includes(search.toLowerCase()),
  );

  const breadcrumbItems = [
    {name: 'Settings', href: '/settings'},
    {name: 'Users & Roles', href: '/users-roles'},
  ];

  return (
    <Layout>
      <div className='px-4'>
        <div className='py-2'>
          <Breadcrumb items={breadcrumbItems} />
        </div>{' '}
        <div className='mb-6'>
          <h2 className='mb-4 text-2xl font-bold text-[#1D2739]'>
            Users & Roles
          </h2>
          <p className='text-[#98A2B3]'>Manage all users in your business</p>
        </div>
        <TabBar
          tabs={['Users', 'Roles']}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
        <div className='bg-white mt-4 p-4 rounded-md shadow'>
          {activeTab === 'Users' && (
            <>
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className='text-red-500'>{error}</p>
              ) : (
                <DataTable columns={columns} data={filteredUsers} />
              )}
            </>
          )}
          {activeTab === 'Roles' && <p>No Roles availabble</p>}
        </div>
      </div>
    </Layout>
  );
};

export default UsersRoles;
