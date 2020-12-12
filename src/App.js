import React from 'react';
import './App.css';

import Name from './name';
import Age from './age';
import Clock from './clock';
import NameForm from './form';
import Toggle from './toggle';
import Click from './click';
import {Boundary} from './eboundary'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Name name="Waqar Qureshi" />
      <Age age='26'/>
      <Clock />
      <NameForm />
      <Toggle />
      <Click />
      <Boundary />
      <p>changes are made fo test purpose</p>
      <p>another change</p>
      <p>after adding a branch</p>
    </div>
  );
}

export default App;
