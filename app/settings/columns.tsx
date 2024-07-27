'use client';

import DeleteUserDialog from '@/components/DeleteUserDialog';
import EditUserDialog from '@/components/EditUserDialog';
import {Button} from '@/components/ui/button';
import {Checkbox} from '@/components/ui/checkbox';
import {ColumnDef} from '@tanstack/react-table';
import {ChevronsUpDown, MoreHorizontal} from 'lucide-react';

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'Administrator' | 'Sales Manager' | 'Sales Representative';
};

export const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({table}) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({row}) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: 'name',
    header: ({column}) => {
      return (
        <div
          className='flex items-center cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Name
          <ChevronsUpDown className='ml-2 h-4 w-4' />
        </div>
      );
    },
  },
  {
    accessorKey: 'email',
    header: ({column}) => {
      return (
        <div
          className='flex items-center cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Email Address
          <ChevronsUpDown className='ml-2 h-4 w-4' />
        </div>
      );
    },
  },
  {
    accessorKey: 'role',
    header: ({column}) => {
      return (
        <div
          className='flex items-center cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Role
          <ChevronsUpDown className='ml-2 h-4 w-4' />
        </div>
      );
    },
    cell: ({row}) => {
      const value = row.getValue('role');
      const color =
        value === 'Administrator'
          ? 'bg-blue-50 text-blue-600'
          : value === 'Sales Manager'
          ? 'bg-green-50 text-green-600'
          : 'bg-orange-50 text-orange-600';
      return (
        <span className={`px-2 py-1 text-sm rounded-full font-medium ${color}`}>
          {value as React.ReactNode}
        </span>
      );
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({row}) => (
      <div className='font-bold flex gap-2'>
        <EditUserDialog user={row.original} />
        <DeleteUserDialog user={row.original} />
      </div>
    ),
  },
];
