import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { todoList } from './model/todo';
import Addbox from './components/molecules/addbox'
import Todo from './components/molecules/todo'

// バックエンド作成するまでのモックデータ
const initialTodoList : todoList = [
  {
    id: 1,
    content: 'プログラミング',
    checked: false
  },
  {
    id: 2,
    content: '買い物',
    checked: false
  },
  {
    id: 3,
    content: 'YOUTUBE',
    checked: true 
  },
]

function App() {
  const [todoList,setTodoList] = useState(initialTodoList)

  const addTodoItem = (text:string) => {
      if ( text === '' ){
        alert('TODO入力してください')
        return;
      }
      const todo = {
        id: todoList.length + 1,
        content : text,
        checked: false
      }
      setTodoList([todo, ...todoList])
  }

  const deleteTodo = (id:number) => {
      const newTodoList = todoList.filter((todo)=>todo.id!==id)
      setTodoList(newTodoList)
  }

  const checkTodo = (id:number,checked:boolean) => {
      //TODO チェック処理
      alert(checked)
  }

  return (
    <div className="App">
      <Container fluid style={{width: "80%"}}>
        <Addbox addTodoItem={addTodoItem}/>
        {todoList.map((todo)=>(
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
        ))}
      </Container>
    </div>
  );
}

export default App;
