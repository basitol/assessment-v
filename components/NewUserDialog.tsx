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
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<
    'Administrator' | 'Sales Manager' | 'Sales Representative' | ''
  >('');
  const [password, setPassword] = useState('');
  const {loading} = useUserContext();
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (
      initialValues.email ||
      initialValues.name ||
      initialValues.role ||
      initialValues.password
    ) {
      setEmail(initialValues.email);
      setName(initialValues.name);
      setRole(initialValues.role);
      setPassword(initialValues.password || '');
    } else {
      setEmail(email);
      setName(name);
      setRole(role);
      setPassword(password);
    }
  }, [initialValues]);

  const validate = () => {
    const newErrors: {[key: string]: string} = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!role) {
      newErrors.role = 'Role is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
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
                onChange={e => {
                  setEmail(e.target.value);
                  setErrors(prev => ({...prev, email: ''}));
                }}
                className='w-full'
              />
              {errors.email && (
                <p className='text-red-600 text-xs'>{errors.email}</p>
              )}
            </div>
            <div className='grid gap-2 w-full'>
              <Label htmlFor='name'>Full Name</Label>
              <Input
                id='name'
                placeholder="New User's Full Name"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                  setErrors(prev => ({...prev, name: ''}));
                }}
                className='w-full'
              />
              {errors.name && (
                <p className='text-red-600 text-xs'>{errors.name}</p>
              )}
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
              {errors.role && (
                <p className='text-red-600 text-xs'>{errors.role}</p>
              )}
            </div>
            <div className='grid gap-2 w-full'>
              <Label htmlFor='password'>Create Password</Label>
              <Input
                id='password'
                placeholder='Create a Password for New User'
                type='password'
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  setErrors(prev => ({...prev, password: ''}));
                }}
                className='w-full'
              />
              {errors.password && (
                <p className='text-red-600 text-xs'>{errors.password}</p>
              )}
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
