'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import api from '@/lib/axios';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Administrator' | 'Sales Manager' | 'Sales Representative';
}

interface NewUser {
  name: string;
  email: string;
  role: 'Administrator' | 'Sales Manager' | 'Sales Representative';
  password: string;
}

interface UserContextProps {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => void;
  createUser: (user: NewUser) => Promise<void>;
  updateUser: (id: string, user: Partial<NewUser>) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({children}: {children: ReactNode}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (user: NewUser) => {
    setLoading(true);
    setError(null);
    try {
      await api.post('/users', user);
      fetchUsers();
    } catch (err) {
      setError('Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id: string, user: Partial<NewUser>) => {
    setLoading(true);
    setError(null);
    try {
      await api.put(`/users/${id}`, user);
      fetchUsers();
    } catch (err) {
      setError('Failed to update user');
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await api.delete(`/users/${id}`);
      fetchUsers();
    } catch (err) {
      setError('Failed to delete user');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        fetchUsers,
        createUser,
        updateUser,
        deleteUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
