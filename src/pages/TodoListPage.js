import '../../styles/TodoStyles.css';

function TodoListPage() {
  return (
    <div className='container'>
      <header>
        <div className='clear'>
          <i id='reset' className='fa fa-refresh'></i>
        </div>
        <p id='date' className='date'>
          Kraunasi...
        </p>
        <img
          className='img-fluid cover-img'
          src='/TODO/gold.jpg'
          alt='Cover image'
        />
      </header>
      <section className='content'>
        <ul id='list' className='list'>
          <li className='item line-through'>
            <i className='fa fa-check-circle make-done' aria-hidden='true'></i>
            <span className='text'>Drink coffe</span>
            <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
            <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
          </li>
          <li className='item'>
            <i className='fa fa-circle-thin make-done' aria-hidden='true'></i>
            <span className='text'>Go to park</span>
            <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
            <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
          </li>
          <li className='item'>
            <i className='fa fa-circle-thin make-done' aria-hidden='true'></i>
            <span className='text'>Walk a dog</span>
            <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
            <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
          </li>
        </ul>
        <div className='add-item'>
          <i
            id='add-todo-btn'
            className='fa fa-plus-circle'
            aria-hidden='true'
          ></i>
          <input type='text' id='input' placeholder='Add todo' />
        </div>
      </section>
    </div>
  );
}

export default TodoListPage;
