import { useState, useRef } from 'react';
import './TodoEditor.css';

const TodoEditor = ({ onCreat }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();  // 유효성검사

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onSubmit = () => {
    if(!content) {  // 값이 비어있으면,
      inputRef.current.focus();
      alert("할 일을 입력해주세요.");
    }
    onCreat(content); // content가 전달되어야 newItem이 제대로 만들어짐
    setContent("");
  }

  // 엔터 키로 입력
  const onKeyDown = (e) => {
    if(e.keyCode === 13) {
      onSubmit();
    }
  }

  return(
    <div className="TodoEditor">
      <h4>Add Todo List ✏️</h4>
      <div className="editor-wrapper">
        <input
          ref={inputRef}
          onKeyDown={onKeyDown}
          value={content}
          onChange={onChangeContent}
          placeholder="Add Todo List..."/>
        <button onClick={onSubmit}>Add</button>
      </div>
    </div>
  );
}

export default TodoEditor;