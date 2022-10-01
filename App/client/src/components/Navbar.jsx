import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, useNavigate} from "react-router-dom";
import Form from './Form.js';
import FormSignup from './FormSignup.js'
import {Link} from 'react-router-dom';
const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;


  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  const navigate  = useNavigate();
  const [toclick,setClick]=React.useState(false);
  function openForm() {
    setClick(true);
  }
  const Navigateform =()=>{
    navigate('/signup');
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Webalytics</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <button onClick={Navigateform} className="Button">Signup</button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
