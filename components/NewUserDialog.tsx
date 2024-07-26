'use client';

import React, {useState, useEffect} from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {PiUserBold} from 'react-icons/pi';
import {CirclePlus, ChevronDown} from 'lucide-react';
import {useUserContext} from '@/contexts/UserContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NewUserDialogProps {
  initialValues?: {
    email: string;
    name: string;
    role: 'Administrator' | 'Sales Manager' | 'Sales Representative' | '';
    password?: string;
  };
  onSubmit: (user: any) => Promise<void>;
  triggerLabel: string;
  triggerIcon?: React.ReactNode;
}

const NewUserDialog: React.FC<NewUserDialogProps> = ({
  initialValues = {email: '', name: '', role: '', password: ''},
  onSubmit,
  triggerLabel,
  triggerIcon,
}) => {
  const [email, setEmail] = useState(initialValues.email);
  const [name, setName] = useState(initialValues.name);
  const [role, setRole] = useState(initialValues.role);
  const [password, setPassword] = useState(initialValues.password || '');
  const {loading} = useUserContext();

  useEffect(() => {
    setEmail(initialValues.email);
    setName(initialValues.name);
    setRole(initialValues.role);
    setPassword(initialValues.password || '');
  }, [initialValues]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (role === '') return; // Simple validation
    await onSubmit({name, email, role, password});
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerLabel === 'Edit' ? (
          <p className='text-blue-600 cursor-pointer'>{triggerLabel}</p>
        ) : (
          <Button variant='secondary' className='text-white flex gap-2'>
            {triggerIcon}
            <span>{triggerLabel}</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] w-full'>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <div className='flex justify-center mb-4'>
              <div className='flex justify-center items-center w-16 h-16 rounded-full bg-blue-50'>
                <PiUserBold className='text-3xl text-blue-600' />
              </div>
            </div>
            <DialogTitle className='text-center'>{triggerLabel}</DialogTitle>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid gap-2 w-full'>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                id='email'
                placeholder="New User's Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='w-full'
              />
            </div>
            <div className='grid gap-2 w-full'>
              <Label htmlFor='name'>Full Name</Label>
              <Input
                id='name'
                placeholder="New User's Full Name"
                value={name}
                onChange={e => setName(e.target.value)}
                className='w-full'
              />
            </div>
            <div className='grid gap-2 w-full'>
              <Label htmlFor='role'>Role</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className='w-full justify-between' variant='outline'>
                    {role === '' ? 'Select Role' : role}
                    <ChevronDown className='ml-2' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-full'>
                  <DropdownMenuItem onSelect={() => setRole('Administrator')}>
                    Administrator
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setRole('Sales Manager')}>
                    Sales Manager
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => setRole('Sales Representative')}>
                    Sales Representative
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className='grid gap-2 w-full'>
              <Label htmlFor='password'>Create Password</Label>
              <Input
                id='password'
                placeholder='Create a Password for New User'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='w-full'
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type='submit'
              className='w-full bg-blue-600'
              disabled={loading}>
              {loading ? 'Submitting...' : triggerLabel}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewUserDialog;
