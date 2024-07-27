'use client';

import React from 'react';
import {Input} from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {Table as ReactTable} from '@tanstack/react-table';
import {LucideListFilter, LucideSearch} from 'lucide-react';

interface SearchAndFilterProps<TData> {
  table: ReactTable<TData>;
}

const SearchAndFilter = <TData,>({table}: SearchAndFilterProps<TData>) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='relative w-full max-w-md'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <LucideSearch className='w-5 h-5 text-gray-400' />
        </div>
        <Input
          placeholder='Search here...'
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          onChange={event =>
            table.getColumn('email')?.setFilterValue(event.target.value)
          }
          className='pl-10 w-full'
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='ml-auto flex gap-1'>
            <LucideListFilter />
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {table
            .getAllColumns()
            .filter(column => column.getCanHide())
            .map(column => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className='capitalize'
                  checked={column.getIsVisible()}
                  onCheckedChange={value => column.toggleVisibility(!!value)}>
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SearchAndFilter;
