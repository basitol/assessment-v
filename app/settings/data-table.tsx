// components/DataTable.tsx
'use client';

import React from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from '@tanstack/react-table';
import {Table} from '@/components/ui/table';
import NewUserDialog from '@/components/NewUserDialog';
import {CirclePlus} from 'lucide-react';
import {useUserContext} from '@/contexts/UserContext';
import SearchAndFilter from '@/components/SearchAndFilter';
import DataTableHeader from '@/components/TableHeader';
import DataTableBody from '@/components/TableBody';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const {createUser} = useUserContext();

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div>
      <div className='flex items-center justify-between py-4'>
        <SearchAndFilter table={table} />
        <NewUserDialog
          onSubmit={async user => await createUser(user)}
          triggerLabel='New User'
          triggerIcon={<CirclePlus />}
        />
      </div>
      <div className='rounded-md border'>
        <Table>
          <DataTableHeader headerGroups={table.getHeaderGroups()} />
          <DataTableBody rows={table.getRowModel().rows} columns={columns} />
        </Table>
      </div>
    </div>
  );
}
