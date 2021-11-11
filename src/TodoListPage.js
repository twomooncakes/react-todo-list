import styled from "styled-components";
import { useState, useEffect, useReducer } from 'react';
import TodoAddNew from './Todos/TodoAddNew';
import TodoHeader from './Todos/TodoHeader';
import TodoList from './Todos/TodoList';

const initTodos = [
  {
    id: 1,
    title: 'Drink coffee',
    isDone: false,
  },
  {
    id: 2,
    title: 'Go to park',
    isDone: true,
  },
  {
    id: 3,
    title: 'Make a pie',
    isDone: false,
  },
];

const ACTIONS = {
    ADD: 'add',
    DELETE: 'delete',
    CHECK: 'check',
    EDIT: 'edit'
}

function todoReducer(todosArr, action) {
    switch(action.type) {
        case ACTIONS.ADD:
            return [...todosArr, action.payload];
        case ACTIONS.DELETE:
            return todosArr.filter(t => t.id !== action.payload);
        case ACTIONS.CHECK:
            return todosArr.map((t) => {
                if (t.id === action.payload) return { ...t, isDone: !t.isDone };
                return t;
            });
        case ACTIONS.EDIT:
            
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
    const [todosArr, dispatch] = useReducer(todoReducer, initTodos);

    const lastTodoId = todosArr.length > 0 ? todosArr[todosArr.length-1].id : 0;

    function generateTodo(title) {
        return { 
            id: lastTodoId + 1,
            title: title,
            doneStatus: false 
        }
    }

    // create state todosArr using useState
    const handleAddNewTodo = (newTitle) => {
        dispatch({type: ACTIONS.ADD, payload: generateTodo(newTitle)})
    };

    const handleTodoDelete = (deleteId) => {
        console.log('you want to delete todo with id', deleteId);
        // const filteredMainArr = todosArr.filter((tObj) => tObj.id !== deleteId);
        // setTodosArr(filteredMainArr);
    };

    const handleEditTodo = (editId, newTitle) => {
        console.log(`you want to edit todo '${ newTitle}' with id`, editId);
        // const newTodosArr = todosArr.map((tObj) => {
        //     if (tObj.id === editId) {
        //         const updatedTObj = {
        //             ...tObj,
        //             title: newTitle,
        //         };
        //         return updatedTObj;
        //     }
        //     return tObj;
        // })
        // setTodosArr(newTodosArr);
    }
    console.log(todosArr);

    const handleCheckUncheckTodo = (id) => {
        console.log('check uncheck', id);
        // const newTodosArr = todosArr.map((tObj) => {
        //     if (tObj.id === id) {
        //         console.log(tObj.isDone);
        //         const updatedTObj = {
        //             ...tObj,
        //             isDone: !tObj.isDone,
        //         };
        //         return updatedTObj;
        //     }
        //     return tObj;
        // })
        // setTodosArr(newTodosArr);
    }

    const handleReset = () => {
        console.log('reset');
        // setTodosArr([]);
        // setTodoIdCounter(1);
    }

    const [headerImage, setheaderImage] = useState('/img/gold.jpg');
    const [isLoading, setIsLoading] = useState(false);

    const handleNewHeaderImage = async() => {
        console.log('new image');
        setIsLoading(true);
        const resp = await fetch('https://picsum.photos/500/200');
        
        console.log(resp);
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
