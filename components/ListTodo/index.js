import { useContext } from 'react';
import Todo from '@/components/Todo';
import HeaderTodo from '@/components/HeaderTodo';
import AddTodo from '@/components/AddTodo';
import UserTodo from '@/components/userTodo';
import { ContextTodo } from '@/context';

const ListTodo = () => {
  const { isDarkMode, todo, user } = useContext(ContextTodo);

  const handlerTheme = () => {
    return isDarkMode ? 'DarkMode' : 'LightMode';
  };

  const renderList = () => {
    return todo?.map((item) => {
      const { id, description, completed } = item;

      return (
        <Todo
          key={id}
          todoId={id}
          description={description}
          checkboxId={`checkbox${id}`}
          completed={Boolean(completed)}
        />
      );
    });
  };

  return (
    <div className={handlerTheme()}>
      <div className="ToDoList">
        <UserTodo userName={user?.name} />

        <div className="ToDoList-card">
          <HeaderTodo title="Todo" count={todo.length} />

          <AddTodo textButton="Submit" placeholder="Add your task..." />

          <ul className="ToDoList-container row p-0">{renderList()}</ul>
        </div>
      </div>
    </div>
  );
};

export default ListTodo;
