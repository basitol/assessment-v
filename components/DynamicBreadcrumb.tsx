'use client';

import {usePathname} from 'next/navigation';
import {Slash} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';

const generateBreadcrumbs = (pathname: string) => {
  const pathParts = pathname.split('/').filter(part => part);
  return pathParts.map((part, index) => {
    const href = '/' + pathParts.slice(0, index + 1).join('/');
    return {href, label: part.charAt(0).toUpperCase() + part.slice(1)};
  });
};

const DynamicBreadcrumb = () => {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.href}>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            {index === breadcrumbs.length - 1 ? (
              <BreadcrumbItem>
                <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbLink href={breadcrumb.href}>
                  {breadcrumb.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
