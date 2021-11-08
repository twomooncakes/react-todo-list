import css from './styles/TodoListPage.module.css';

import { useState, useEffect } from 'react';
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

function TodoListPage() {
    const [todosArr, setTodosArr] = useState(initTodos);

    const [todoIdCounter, setTodoIdCounter] = useState(4);
    // create state todosArr using useState
    const handleAddNewTodo = (title) => {
        console.log('add new');
        const newTodoObj = {
            id: todoIdCounter,
            title: title,
            isDone: false,
        };
        const newTodoArrState = [...todosArr, newTodoObj];
        setTodosArr(newTodoArrState);
        setTodoIdCounter(() => todoIdCounter + 1);
        handleNewHeaderImage();
    };

    const handleTodoDelete = (deleteId) => {
        console.log('you want to delete todo with id', deleteId);
        const filteredMainArr = todosArr.filter((tObj) => tObj.id !== deleteId);
        setTodosArr(filteredMainArr);
    };

    // handleEditTodo - pass it down to TodoItem
    // find item with id === id, update its title without modifying original arr
    const handleEditTodo = (editId, newTitle) => {
        console.log(`you want to edit todo '${ newTitle}' with id`, editId);
        const newTodosArr = todosArr.map((tObj) => {
            if (tObj.id === editId) {
                const updatedTObj = {
                    ...tObj,
                    title: newTitle,
                };
                return updatedTObj;
            }
            return tObj;
        })
        setTodosArr(newTodosArr);
    }
    console.log(todosArr);

    const handleCheckUncheckTodo = (id) => {
        console.log('check uncheck', id);
        const newTodosArr = todosArr.map((tObj) => {
            if (tObj.id === id) {
                console.log(tObj.isDone);
                const updatedTObj = {
                    ...tObj,
                    isDone: !tObj.isDone,
                };
                return updatedTObj;
            }
            return tObj;
        })
        setTodosArr(newTodosArr);
    }

    const handleReset = () => {
        console.log('reset');
        setTodosArr([]);
        setTodoIdCounter(1);
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
        <div className={css.mainEl}>
        <div className={css.container}>
        <TodoHeader 
            todos={todosArr} 
            handleReset={handleReset}
            onNewHeaderImage={handleNewHeaderImage}
            headerImage={headerImage}
            isLoading={isLoading}
        />
        <section className={css.content}>
            <TodoList 
                todos={todosArr} 
                onTodoDelete={handleTodoDelete} onTodoEdit={handleEditTodo} 
                onTodoCheckUncheck={handleCheckUncheckTodo}
            />
            <TodoAddNew onAddNewTodo={handleAddNewTodo} />
        </section>
        </div>
        </div>
    );
}

export default TodoListPage;
