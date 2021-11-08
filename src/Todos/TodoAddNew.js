import css from '../styles/TodoAddNew.module.css';

import { useState } from 'react';
// TodoAddNew
function TodoAddNew(props) {
  // create newTitle State
  const [newTitle, setNewTitle] = useState('');
  // bind state to input
  const handleNewTodoInput = (e) => {
    setNewTitle(e.target.value);
  };

  const sentTodoTitle = () => {
    if (!newTitle) return;
    props.onAddNewTodo(newTitle);
    setNewTitle('');
  };

  return (
    <div className={css['add-item']}>
      <i
        onClick={sentTodoTitle}
        id='add-todo-btn'
        className='fa fa-plus-circle'
        aria-hidden='true'
      ></i>
      <input
        value={newTitle}
        onChange={handleNewTodoInput}
        type='text'
        id='input'
        placeholder='Add todo'
      />
    </div>
  );
}

export default TodoAddNew;
