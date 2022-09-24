import React from 'react';
import './App.css';
import Form from './Form';
import Loginform from './Loginform';
import { BrowserRouter as Router, Routes, Route, Switch, Link} from "react-router-dom";
function App() {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Form />} />
          <Route path="/Loginform" element={<Loginform />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
