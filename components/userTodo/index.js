import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/Button';
import { ContextTodo } from '@/context';
import { logoutUser } from '@/services/user';
import { alertShow } from '../Alert';

const UserTodo = ({ userName }) => {
  const router = useRouter();
  const { user } = useContext(ContextTodo);

  const handlerLogout = async () => {
    if (user) {
      const { token } = user;
      try {
        const { status } = await logoutUser(token);

        if (status === 200) {
          localStorage.removeItem('userData');
          alertShow.success('Successful logout...');
          router.push('/login');
        }
      } catch ({ message }) {
        alertShow.error(message);
      }
    }
  };

  return (
    <div className="ToDoList-user">
      <span className="ToDoList-user-name">{userName}</span>
      <Button
        text="Logout"
        customClass="ToDoList-user-button"
        typeButton="button"
        onClick={handlerLogout}
      />
    </div>
  );
};

UserTodo.propTypes = {
  userName: PropTypes.string,
};

UserTodo.defaultProps = {
  userName: '',
};

export default UserTodo;
