import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
//import styled from "styled-components"

// const Container = styled.div `
// height: 60px;
// background-color: black;
// `



const Button = styled.button`

  padding: 10px;
  background-color: red;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;


const ButtonBlue = styled.button`

  padding: 10px;
  background-color: blue;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const NavBar = () => {
  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="Left"></div>
        <div className="Center">
          <div className="Logo"> Party Zone Rentals </div>
       
        </div>
        <div className="Right">
        
          <Link to={`/register/`}>
       
              <Button>Login</Button>
       
          </Link>
          <Link to={`/list/`}>
       
              <ButtonBlue>Review</ButtonBlue>
       
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
