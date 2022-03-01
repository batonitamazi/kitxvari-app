import './App.css';
import React from "react";
import Routing from './routing';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <Routing style={{ overflow: 'hidden' }} />
      </Router>
    </div>
  );
}

export default App;
