import styled from "styled-components";
import { useState, useEffect } from 'react';
import TodoAddNew from './Todos/TodoAddNew';
import TodoHeader from './Todos/TodoHeader';
import TodoList from './Todos/TodoList';

import { useSelector, useDispatch } from 'react-redux';
import { todoListActions } from "./store/store";

const ACTIONS = {
    ADD: 'add',
    DELETE: 'delete',
    CHECK: 'check',
    EDIT: 'edit',
    RESET: 'reset',
}

function todoReducer(todosArr, action) {
    switch(action.type) {
        case ACTIONS.ADD:
            return [...todosArr, action.payload];
        case ACTIONS.DELETE:
            return todosArr.filter(t => t.id !== action.payload);
        case ACTIONS.CHECK:
            return todosArr.map((t) => {
                if (t.id === action.payload) return { 
                    ...t, 
                    isDone: !t.isDone 
                };
                return t;
            });
        case ACTIONS.EDIT:
            return todosArr.map((t) => {
                if (t.id === action.payload.editId) return { 
                    ...t, 
                    title: action.payload.newTitle 
                };
                return t;
            });
        case ACTIONS.RESET:
            return todosArr = [];
        default:
            console.log('type not found');
            return todosArr;
    }
};

const MainWrapper = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & i {
        cursor: pointer;
    }
`;

const Container = styled.div`
    margin-top: 2rem;
    width: 500px;
`;

const Section = styled.section`
    border: 1px solid lightgray;
    border-top-color: transparent;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -5px;
`;

function TodoListPage() {
    // const [todosArr, dispatch] = useReducer(todoReducer, initTodos);
    const todosArr = useSelector((state) => state.todoList.todos);
    console.log(todosArr);

    const dispatch = useDispatch();

    const lastTodoId = todosArr.length > 0 ? todosArr[todosArr.length-1].id : 0;

    function generateTodo(title) {
        return { 
            id: lastTodoId + 1,
            title: title,
            doneStatus: false 
        }
    }

    const handleAddNewTodo = (newTitle) => {
        console.log('add new');
        dispatch(todoListActions.add(generateTodo(newTitle)))
    };

    const handleTodoDelete = (deleteId) => {
        console.log('you want to delete todo with id', deleteId);
        dispatch({type: ACTIONS.DELETE, payload: deleteId});
    };

    const handleEditTodo = (editId, newTitle) => {
        console.log(`you want to edit todo '${ newTitle}' with id`, editId);
        dispatch({type: ACTIONS.EDIT, payload: { editId, newTitle }});
    }
    console.log(todosArr);

    const handleCheckUncheckTodo = (checkId) => {
        console.log('check uncheck', checkId);
        dispatch({type: ACTIONS.CHECK, payload: checkId});
    }

    const handleReset = () => {
        console.log('reset');
        // dispatch({type: ACTIONS.RESET})
        dispatch(todoListActions.reset());
    }

    const [headerImage, setheaderImage] = useState('/img/gold.jpg');
    const [isLoading, setIsLoading] = useState(false);

    const handleNewHeaderImage = async() => {
        console.log('new image');
        setIsLoading(true);
        const resp = await fetch('https://picsum.photos/500/200');
        setIsLoading(false);
        setheaderImage(resp.url);
    }

    useEffect(() => {
        if(isLoading) {
            console.log('loading');
        }
    }, [isLoading])

    

    return (
        <MainWrapper>
            <Container>
                <TodoHeader 
                    todos={todosArr} 
                    handleReset={handleReset}
                    onNewHeaderImage={handleNewHeaderImage}
                    headerImage={headerImage}
                    isLoading={isLoading}
                />
                <Section>
                    <TodoList 
                        todos={todosArr} 
                        onTodoDelete={handleTodoDelete} onTodoEdit={handleEditTodo} 
                        onTodoCheckUncheck={handleCheckUncheckTodo}
                    />
                    <TodoAddNew onAddNewTodo={handleAddNewTodo} />
                </Section>
            </Container>
        </MainWrapper>
    );
}

export default TodoListPage;
