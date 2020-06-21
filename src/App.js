import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter';
import HookCounterMultiple from './components/HookCounterMultiple';
import HookCounter2 from './components/HookCounter2';
import HookCounterObjects from './components/HookCounterObjects';
import HookCounterArray from './components/HookCounterArray';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterEffect from './components/HookCounterEffect';

function App() {
  return (
    <div className="App">
      <div className="counter2">
        <HookCounterEffect />
        {/*  <ClassCounterOne /> */}
      </div>
      <div className="counter2">
        <HookCounterArray />
        <HookCounterObjects />
      </div>
      <div className="counter">
        <ClassCounter />
        <HookCounter />
        <HookCounterMultiple />
        <HookCounter2 />
      </div>

    </div>
  );
}

export default App;
