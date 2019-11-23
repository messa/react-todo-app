import React from 'react';
import { uuidv4 } from './shared';

import './app.css';

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

const Test = (props: { label: String }) => {
  return (
    <div>
      <p><strong>{props.label}</strong></p>
    </div>
  )
}

export const App = () => {
  return (
    <div className="container">
      <Test label='ahoj' />
      <h1>Hello world!</h1>
      <pre>{JSON.stringify(initialState, null, 2)}</pre>
    </div>
  );
};
