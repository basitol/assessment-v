// components/EditUserDialog.tsx
import NewUserDialog from './NewUserDialog';
import {User, useUserContext} from '@/contexts/UserContext';

interface EditUserDialogProps {
  user: User;
}

const EditUserDialog: React.FC<EditUserDialogProps> = ({user}) => {
  const {updateUser} = useUserContext();

  const handleEditUser = async (updatedUser: Partial<User>) => {
    await updateUser(user?.id, updatedUser);
  };

  return (
    <NewUserDialog
      initialValues={user}
      onSubmit={handleEditUser}
      triggerLabel='Edit'
      triggerIcon={''} // Use appropriate icon for edit
    />
  );
};

export default EditUserDialog;
