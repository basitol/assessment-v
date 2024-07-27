// components/TableBody.tsx
'use client';

import React from 'react';
import {flexRender, Row, ColumnDef} from '@tanstack/react-table';
import {TableBody, TableCell, TableRow} from '@/components/ui/table';

interface TableBodyProps<TData> {
  rows: Row<TData>[];
  columns: ColumnDef<TData, any>[];
}

const DataTableBody = <TData,>({rows, columns}: TableBodyProps<TData>) => {
  return (
    <TableBody>
      {rows?.length ? (
        rows.map(row => (
          <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className='h-24 text-center'>
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default DataTableBody;
