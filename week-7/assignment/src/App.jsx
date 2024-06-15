import { useState } from "react";
import { Todo,Title,Description,filterTodos,Filt} from "./store/atoms/state";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
let count = 1;

function App() {
  return (
    <RecoilRoot>
      <TodosAdder />
      <br />

      <Filter /> <br /><br />
      <RenderTodo />
      <br />
    </RecoilRoot>
  );
}

function TodosAdder() {
  const [title, setTitle] = useRecoilState(Title);
  const [description, setDescription] = useRecoilState(Description);
  const setTodos = useSetRecoilState(Todo);

  const addTodo = () => {
    setTodos((todos) => [...todos, { title, description, count }]);
    count++;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={addTodo}>Add a Todo</button>
     
    </div>
  );
}

function RenderTodo() {
  const todos = useRecoilValue(Todo);
  return (
    <div> ALL Todos
      {todos.map((todo) => (
        <div key={todo.count}>
          <h1>{todo.title}</h1>
          <h3>{todo.description}</h3>
        </div>
      ))}
    </div>
  );
}
function Filter(){
   const setFilt = useSetRecoilState(Filt);
   const [value,setValue] = useState("");
   
    const a = useRecoilValue(filterTodos, value);
    setFilt(a)
  return (
    <>
      <input
        type="text"
        placeholder="filter"
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <Renderfiltertodos />
    </>
  );
}

function Renderfiltertodos(){
  const filt = useRecoilValue(Filt);
  return <div>
    {
      filt.map((fil,index)=>{
        <div key={index}>
          <h1>{fil.title}</h1>
          <h3>{fil.description}</h3>
        </div>
      })
    }
  </div>
}

export default App;
