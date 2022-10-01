import React from 'react';
import './App.css';
import Form from './Form';
import Loginform from './Loginform';
import { BrowserRouter as Router, Routes, Route, Switch, Link} from "react-router-dom";
import BackendTesting from './BackendTesting';
import ProtectedComponent from './ProtectedComponent';


function App() {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Form />} />
          <Route path="/Loginform" element={<Loginform />} />
          {/* Backend Testing route */}
          <Route path="/test" element={<BackendTesting/>} />
          <Route path="/protected" element={<ProtectedComponent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
