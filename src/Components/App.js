import React from 'react';
import ExplorerComponent from './ExplorerComponent';
import { config } from '../configurations';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="headerText">
        Smartcar API Explorer Demo
      </h1>
      <ExplorerComponent 
        title={config.addUser.title}
        url={config.addUser.url}
        method={config.addUser.method}
        body={config.addUser.body}
      />
    </div>
  );
}

export default App;
