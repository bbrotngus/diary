import { useReducer, useRef, useState } from "react";
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
// import TestComponent from "./component/TestComponent";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React study",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Laundry",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Practice Singing",
    createdDate: new Date().getTime(),
  },
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) => 
        it.id === action.targetId ?
        {...it,
        isDone : !it.isDone
        } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}


function App() {
  const[todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreat = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id:idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  }

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId
    });
  }

  const onDelete = (targetId) => {  // 받아온 id와 기존 id를 비교해서 같은게 있다면, 그것만 빼고 출력
    dispatch({
      type: "DELETE",
      targetId
    });
  }

  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreat={onCreat}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}


/*
function App() {
  return(
    <div className="App">
      <TestComponent/>
    </div>
  ); 
}
*/

export default App;