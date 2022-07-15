import React from 'react';
import logo from './logo.png'
import {Link} from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to="/"><img src={logo} alt="logo"/></Link>
    </>
  )
}

export default Logo;