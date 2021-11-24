import styled from "styled-components";
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { todoListActions } from "../store/store";

const TodoUl = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const MessageParagraph = styled.p`
    text-align: center;
    margin: 1.5rem;
`;

// TodoList
function TodoList(props) {
    const todosArr = useSelector((state) => state.todoList.todos);

    const dispatch = useDispatch();
    dispatch(todoListActions.sort());

    return (
        <TodoUl>
        {todosArr.length === 0 ? <MessageParagraph>You have no tasks. Add a task below!</MessageParagraph> : todosArr.map((todo) => (
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
        
        </TodoUl>
    );
}

export default TodoList;