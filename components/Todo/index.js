import PropTypes from 'prop-types';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useContext, useState } from 'react';
import Button from '@/components//Button';
import Input from '@/components//Input';
import Checkbox from '@/components//Checkbox';
import { ContextTodo } from '@/context';
import { alertShow } from '@/components/Alert';
import { deleteTodo, updateTodo } from '@/services/todo';

const Todo = ({ todoId, description, checkboxId, completed }) => {
  const { todo, setTodo, user } = useContext(ContextTodo);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(description);
  const [check, setCheck] = useState(completed);

  const handlerIsEditing = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const editTodo = async (key, value) => {
    let newTodo = {
      description: text,
      completed: check,
      meta: {},
    };

    newTodo = { ...newTodo, [key]: value };

    try {
      const { data, status } = await updateTodo(
        todoId,
        user?.id,
        newTodo,
        user?.token,
      );

      if (status === 200) {
        if (key === 'completed') setCheck(value);

        const modifyTodo = todo.map((item) => {
          if (data.id === item.id) {
            return {
              ...item,
              description: data.description,
              completed: data.completed,
            };
          }

          return item;
        });

        setTodo(modifyTodo);
        alertShow.success('Todo updated successfully');
      }
    } catch (error) {
      alertShow.error(error);
    }
  };

  const handlerClickDelete = async () => {
    try {
      const { status } = await deleteTodo(todoId, user?.id, user?.token);

      if (status === 200) {
        const removeTodo = todo.filter((item) => {
          return item.id !== todoId;
        });

        setTodo(removeTodo);

        alertShow.success('Deleted to do successful');
      }
    } catch (error) {
      alertShow.error(error);
    }
  };

  const handlerKeyPress = (e) => {
    if (e.key === 'Enter' && text) {
      editTodo('description', text);
      handlerIsEditing();
    }
  };

  const handlerShow = (reverse = false) => {
    if (reverse) return isEditing ? 'd-none' : '';

    return isEditing ? '' : 'd-none';
  };

  const handlerChangeInput = ({ target }) => {
    setText(target.value);
  };

  return (
    <li className="ToDoList-task" id={todoId}>
      <div className="col-9 d-flex">
        <Checkbox
          id={checkboxId}
          classCheckbox={`ToDoList-checkBox form-check-input rounded-circle ${handlerShow(
            true,
          )}`}
          label={description}
          classLabel={`ToDoList-text ${handlerShow(true)}`}
          check={check}
          onChange={(e) => editTodo('completed', e.target.checked)}
        />
        <Input
          placeholder="Editing task"
          inputType="text"
          customClass={`ToDoList-input edit ${handlerShow()}`}
          value={text}
          onChange={handlerChangeInput}
          onKeyDownCapture={handlerKeyPress}
        />
      </div>

      <div className="ToDoList-controls col-3">
        <Button
          typeButton="button"
          customClass="Button-edit"
          onClick={handlerIsEditing}
        >
          <FaEdit />
        </Button>

        <Button
          typeButton="button"
          customClass="Button-delete"
          onClick={handlerClickDelete}
          disabled={isEditing}
        >
          <FaTrashAlt />
        </Button>
      </div>
    </li>
  );
};

Todo.propTypes = {
  todoId: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  checkboxId: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
