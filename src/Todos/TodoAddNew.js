import styled from "styled-components";
import { useState } from 'react';

const AddNewButton = styled.i``;

const AddNewInput = styled.input``;

const AddNewContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;

    ${AddNewButton} {
        cursor: pointer;
        color: DodgerBlue;
        font-size: 1.5rem;
        padding: 15px 5px 15px 15px;
    }

    ${AddNewInput} {
        font-size: 1rem;
        padding: 6px 8px;
        width: 100%;
        margin-right: 15px;
    }
`;


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
        <AddNewContainer>
        <AddNewButton
            onClick={sentTodoTitle}
            id='add-todo-btn'
            className='fa fa-plus-circle'
            aria-hidden='true'
        ></AddNewButton>
        <AddNewInput
            value={newTitle}
            onChange={handleNewTodoInput}
            type='text'
            placeholder='Add todo'
        />
        </AddNewContainer>
    );
}

export default TodoAddNew;
