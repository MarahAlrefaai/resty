import React from 'react';
import header from './header.css'
//import { NavLink } from 'react-router-dom';
//React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. 

function Header (props)  {
  return (
    <>
    <header>
      <h1>RESTy</h1>
     
    </header>

<nav>
<ul >
  <li ><a href='../pages/help/help.js'  >History</a></li>
  <li ><a href='../pages/help/history.js' >Help</a></li>
</ul>
</nav>
</>
  );
};

export default Header;