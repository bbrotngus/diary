import './TodoItem.css';

const TodoItem = ({ id, content, isDone, createDate, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  const onClickDelete = () => {
    onDelete(id);
  }

  return(
    <div className='TodoItem'>
      <div className='checkbox_col'>
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox"/>
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date().toLocaleDateString(createDate)}
      </div>
      <div className='btn_col'>
        <button onClick={onClickDelete}>Del</button>
      </div>
    </div>
  );
}

export default TodoItem;