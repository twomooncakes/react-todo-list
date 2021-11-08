import css from '../styles/TodoHeader.module.css';
import TimeDisplay from './Time';

function TodoHeader(props) {
    const onReset = () => {
        props.handleReset();
    }

    let completedTasks = props.todos.filter(tObj => tObj.isDone);

    return (
        <header>
        <div className={css.clear}>
            <i id='reset' className='fa fa-refresh' onClick={onReset}></i>
            {props.isLoading ? '' : <i className='fa fa-photo' onClick={props.onNewHeaderImage}></i>}
            
        </div>
        <p id='date' className={css.date}>
            {props.isLoading ? <span>Loading...</span> : <TimeDisplay />}
            <span>
                Tasks completed: {completedTasks.length}/{props.todos.length}
            </span>
        </p>
        <img
            className={`${css['img-fluid']} ${css['cover-img']}`}
            src={props.headerImage}
            alt='Cover'
        />
        </header>
    );
}

export default TodoHeader;
