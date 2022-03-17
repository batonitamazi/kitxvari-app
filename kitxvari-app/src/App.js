import './App.css';
import React from "react";
import Routing from './routing';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={false}>
        <Routing style={{ overflow: 'hidden' }} />
      </Router>
    </div>
  );
}

export default App;
