// components/Breadcrumb.tsx
import Link from 'next/link';
import {RxSlash} from 'react-icons/rx';

interface BreadcrumbProps {
  items: {name: string; href: string}[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({items}) => {
  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        {items.map((item, index) => (
          <li key={index} className='inline-flex items-center'>
            <Link
              href={item.href}
              className='text-sm font-medium text-gray-700 hover:text-gray-900'>
              {item.name}
            </Link>
            {index < items.length - 1 && (
              <>
                <RxSlash />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
