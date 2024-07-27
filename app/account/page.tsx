'use client';

import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';
import {useState} from 'react';

const Page = () => {
  const breadcrumbItems = [{name: 'Account', href: '/account'}];

  return (
    <Layout>
      <div className='px-4'>
        <div className='py-2'>
          <Breadcrumb items={breadcrumbItems} />
        </div>{' '}
        <h2 className='mb-4 text-2xl font-bold text-[#1D2739]'>Account</h2>
      </div>
    </Layout>
  );
};

export default Page;
