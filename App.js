import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Firstcomponent from './components/Firstcomponent'
import Secondcomponent, {Thirdcomponent} from './components/Secondcomponent';
import Countercomponent from './components/counter/Counter';
import UncontrolledComponent from './components/Learning/UncontrolledComponent';
import ControlledComponent from './components/Learning/ControlledComponent';
import ListComponent from './components/Learning/ListComponent';
import MountingComponent from './components/Learning/MountingComponent';

function App() {
  return (
    <div className="App">
     <MountingComponent favColor='red'/>
  
    </div>
  );
}


export default App;
