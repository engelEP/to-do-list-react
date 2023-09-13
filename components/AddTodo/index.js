import PropTypes from 'prop-types';
import { FaTelegramPlane } from 'react-icons/fa';
import { useContext, useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { ContextTodo } from '@/context';
import { alertShow } from '../Alert';
import { createTodo } from '@/services/todo';

const AddTodo = ({ textButton, placeholder }) => {
  const [text, setText] = useState('');
  const { todo, setTodo, user } = useContext(ContextTodo);

  const addTodo = async () => {
    if (text) {
      const newTodo = {
        description: text,
        completed: false,
        meta: {},
      };

      try {
        const { data, status } = await createTodo(
          user?.id,
          newTodo,
          user?.token,
        );

        if (status === 200) {
          alertShow.success('Todo created successfully');
          setTodo([...todo, data]);
        }
      } catch (error) {
        alertShow.error(error);
      }
    } else {
      alertShow.info('Description to do is required');
    }
  };

  const handlerChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    addTodo();
    setText('');
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div className="row">
        <div className="col-9 p-0">
          <Input
            placeholder={placeholder}
            inputType="text"
            customClass="ToDoList-input"
            onChange={handlerChange}
            value={text}
          />
        </div>
        <Button
          text={textButton}
          typeButton="submit"
          customClass="Button-add col-3"
        >
          <FaTelegramPlane />
        </Button>
      </div>
    </form>
  );
};

AddTodo.propTypes = {
  textButton: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default AddTodo;
