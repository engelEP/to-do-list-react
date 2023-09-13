import PropTypes from 'prop-types';
import { useContext } from 'react';
import Checkbox from '@/components/Checkbox';
import { ContextTodo } from '@/context';

const HeaderTodo = ({ title, count }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ContextTodo);

  const handlerTheme = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className="ToDoList-header row">
      <h2 className="ToDoList-title col-9">{`${title} (${count})`}</h2>
      <div className="ToDoList-mode form-check form-switch col-3">
        <Checkbox
          id="switchCheck"
          classCheckbox="form-check-input ToDoList-checkMode"
          label="Dark mode"
          classLabel="form-check-label"
          check={isDarkMode}
          onChange={handlerTheme}
        />
      </div>
    </div>
  );
};

HeaderTodo.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
};

HeaderTodo.defaultProps = {
  title: '',
  count: 0,
};

export default HeaderTodo;
