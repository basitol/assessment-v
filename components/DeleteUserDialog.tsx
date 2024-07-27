'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';
import {useUserContext} from '@/contexts/UserContext';
import {User} from '@/contexts/UserContext';
import {FiTrash2} from 'react-icons/fi';

interface DeleteUserDialogProps {
  user: User;
}

const DeleteUserDialog: React.FC<DeleteUserDialogProps> = ({user}) => {
  const {deleteUser, loading} = useUserContext();

  const handleDelete = async () => {
    await deleteUser(user.id);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='text-[#98A2B3]'>Remove</button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] w-full flex flex-col items-center'>
        <DialogHeader>
          <DialogTitle className='text-center text-[#1D2739] text-2xl'>
            Delete this user
          </DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <p className='text-center text-[#667185]'>
            This user and all associated data will be permanently removed. Do
            you wish to continue?
          </p>
        </div>
        <DialogFooter className='flex justify-between'>
          <Button variant='outline'>Cancel action</Button>
          <Button
            variant='destructive'
            onClick={handleDelete}
            disabled={loading}
            className='flex items-center gap-2'>
            <FiTrash2 />
            {loading ? 'Deleting...' : 'Yes, Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserDialog;
