import css from '../styles/TodoItem.module.css';

import { useState } from 'react';
function TodoItem(props) {
    const [isEditOn, setIsEditOn] = useState(false);
    const [editedTitle, setEditedTitle] = useState(props.title);
    // uncheked styles item, fa-circle-thin
    // checked styles item line-through, fa-check-circle

    const itemClasses = () => {
    return props.isDone ? `${css.item} ${css['line-through']}` : css.item;
    };
    const checkCircleClasses = () => {
    return `fa fa-${props.isDone ? 'check-circle' : 'circle-thin'}`;
    };
    // add title from props

    const sendDeleteId = (e) => {
        props.onTodoDelete(props.id);
    };

    const handleEditLocal = () => {
        // send updated title with props
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
        <li className={itemClasses()}>
            <i className={checkCircleClasses()} aria-hidden='true' onClick={handleCheckUncheck}></i>
            {isEditOn ? (
            <input
                type='text'
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
            />
            ) : (
            <span className='text'>
                {' '}
                {props.title} {' '}
            </span>
            )}
            <i
                onClick={handleEditLocal}
                className='fa fa-pencil edit-icon'
                aria-hidden='true'
            ></i>
            <i
                onClick={sendDeleteId}
                className='fa fa-trash delete-icon'
                aria-hidden='true'
            ></i>
        </li>
    );
}

export default TodoItem;
