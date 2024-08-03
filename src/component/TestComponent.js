import { useReducer } from "react";

function reducer(state, action) {
  switch(action.type) {
    case "plus":
      return state + action.data;
    case "minus":
      return state - action.data;
    case "init":
      return 0;
    default:
      return state;
  }
}

function TestComponent() {
  const[count, dispatch] = useReducer(reducer, 0);

  return(
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        <button onClick={() => dispatch({ type:"plus", data:1 })}>+</button>
        <button onClick={() => dispatch({ type:"minus", data:1})}>-</button>
        <button onClick={() => dispatch({ type:"init" })}>초기화</button>
      </div>
    </div>
  )


}

export default TestComponent;