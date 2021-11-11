import styled from "styled-components";
import { useState } from 'react';
import Icon from "./Icon";

const ListItem = styled.li`
    padding: 15px;
    border-bottom: 1px solid lightgray;
    text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
    color: ${props => props.isDone ? 'rgba(0, 0, 0, 0.555)' : '#212529'};

    & i {
        font-size: 18px;
        cursor: pointer;
    }

    i:last-child {
        float: right;
    }

    input {
        font-size: 1rem;
        padding: 6px 8px;
    }
`;


function TodoItem(props) {
    const [isEditOn, setIsEditOn] = useState(false);
    const [editedTitle, setEditedTitle] = useState(props.title);

    const sendDeleteId = (e) => {
        props.onTodoDelete(props.id);
    };

    const handleEditLocal = () => {
        if (isEditOn) {
            console.log('update', props.id, editedTitle);
            props.onTodoEdit(props.id, editedTitle);
        }
        setIsEditOn(!isEditOn);
    };

    const handleCheckUncheck = () => {
        props.onTodoCheckUncheck(props.id);
    };

    return (
        <ListItem isDone={props.isDone}>
            <Icon clickFunc={handleCheckUncheck} id={props.id} iconName={props.isDone ?  'check-circle' : 'circle-thin'}></Icon>
            {isEditOn ? (
            <input
                type='text'
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
            />
            ) : (
            <span>
                {' '}
                {props.title} {' '}
            </span>
            )}
            <Icon clickFunc={handleEditLocal} iconName='pencil edit-icon'/>
            <Icon clickFunc={sendDeleteId} iconName='trash delete-icon'/>
        </ListItem>
    );
}

export default TodoItem;
