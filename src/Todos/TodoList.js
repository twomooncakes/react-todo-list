import css from '../styles/TodoList.module.css';

import TodoItem from './TodoItem';

// TodoList
function TodoList(props) {
    props.todos.sort((a, b) => a.isDone - b.isDone);
    return (
        <ul id='list' className={css.list}>
        
        {props.todos.length === 0 ? <p className="text-center m-4">You have no tasks. Add a task below!</p> : props.todos.map((todo) => (
            <TodoItem
                key={todo.id}
                title={todo.title}
                isDone={todo.isDone}
                id={todo.id}
                onTodoDelete={props.onTodoDelete}
                onTodoEdit={props.onTodoEdit}
                onTodoCheckUncheck={props.onTodoCheckUncheck}
            />
        ))}
        </ul>
    );
}

export default TodoList;