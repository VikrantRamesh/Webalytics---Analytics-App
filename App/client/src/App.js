import styled, { css } from "styled-components";
import React from 'react';
import './App.css';
import Form from './Form';
import Loginform from './Loginform';
import { BrowserRouter as Router, Routes, Route, Switch, Link} from "react-router-dom";
import BackendTesting from './BackendTesting';
import ProtectedComponent from './ProtectedComponent';
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";



const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;


function App() {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/navbar" element={<Navbar />}/>
          <Route path="/home" element={<Intro />} />
          <Route path="/features" element={<Feature />}/>
          <Route path="/services" element={<Service />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/footer" element={<Footer />}/>
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
