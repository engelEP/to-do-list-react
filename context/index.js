import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { alertShow } from '@/components/Alert';
import { getTodo } from '@/services/todo';

const ContextTodo = createContext();

const ProviderTodo = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode');
  const [user, setUser] = useLocalStorage('userData', {});
  const [todo, setTodo] = useState([]);

  const fetchTodo = async () => {
    if (localStorage.getItem('userData')) {
      const { id, token } = JSON.parse(localStorage.getItem('userData'));

      try {
        const { data, status } = await getTodo(id, token);

        if (status === 200) {
          setTodo(data);
        }
      } catch (error) {
        alertShow.error(error);
      }
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <ContextTodo.Provider
      value={{ isDarkMode, setIsDarkMode, todo, setTodo, user, setUser }}
    >
      {children}
    </ContextTodo.Provider>
  );
};

ProviderTodo.propTypes = {
  children: PropTypes.node,
};

ProviderTodo.defaultProps = {
  children: <></>,
};

export { ContextTodo, ProviderTodo };
