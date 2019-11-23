import React from 'react';
import { useState } from 'react';
import { uuidv4 } from './shared';

import './app.css';
import { AddTodo } from '../finish/todo-manager/add-todo';

const initialState = [
  {
    id: uuidv4(),
    completed: false,
    title: 'Learn React'
  },
  {
    id: uuidv4(),
    completed: false,
    title: 'Learn JavaScript'
  },
  {
    id: uuidv4(),
    completed: false,
    title: 'Learn TypeScript'
  },
  {
    id: uuidv4(),
    completed: true,
    title: 'Learn Something done!'
  }
];

const Todo = (props: { title: string, completed: boolean }) => {
  return (
    <div>
      {props.completed ? '✅' : '❌'}
      {props.title}
    </div>
  )
}

const Todos = (props: { items: any }) => {
  return (
    <ul>
      {props.items.map((item: any) => (
        <li key={item.id}>
          <Todo title={item.title} completed={item.completed} />
        </li>
      ))}
    </ul>
  )
}

const Click = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // const state: count = 1;
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

const AddNewTodoForm = () => {
  return (
    <form
      onSubmit={() => { alert('submitted') }}
    >
      <input
        type='text'
        className='input'
        placeholder='what?'
      />
      <br />
      <button type='submit'>Add</button>

    </form>
  )
}

export const App = () => {
  const [todos, setTodos] = useState(initialState);



  return (
    <div className="container">
      <Click />
      <Todos items={todos} />
      <AddNewTodoForm />
    </div>
  );
};
