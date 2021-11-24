import styled from "styled-components";
import TodoItem from './TodoItem';

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
    // props.todos.sort((a, b) => a.isDone - b.isDone);
    return (
        <TodoUl>
        {props.todos.length === 0 ? <MessageParagraph>You have no tasks. Add a task below!</MessageParagraph> : props.todos.map((todo) => (
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