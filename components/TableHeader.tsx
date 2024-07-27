// components/TableHeader.tsx
'use client';

import React from 'react';
import {
  flexRender,
  HeaderGroup,
  Table as ReactTable,
} from '@tanstack/react-table';
import {TableHead, TableHeader, TableRow} from '@/components/ui/table';

interface TableHeaderProps<TData> {
  headerGroups: HeaderGroup<TData>[];
}

const DataTableHeader = <TData,>({headerGroups}: TableHeaderProps<TData>) => {
  return (
    <TableHeader>
      {headerGroups.map(headerGroup => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map(header => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};

export default DataTableHeader;
