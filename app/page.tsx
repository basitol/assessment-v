'use client';

import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/account'); // Adjust this to your actual dashboard route
  }, [router]);

  return null;
};

export default HomePage;
