import React from "react";
import './navitems.css';
import logo from './ww84.png';

import { Link } from 'react-router-dom'; 

const Navbar = () => (
<nav class="flex items-center  flex-wrap p-2" >
  <div class="flex items-center flex-shrink-0">
  <Link to="/"><img src={logo} className="Logo" alt="logo" /></Link>
  <div className="body-text text-white font-bold py-2 px-4"><a className="a" href="/">@dwvicy</a></div>
  </div>
 
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
    <div className={"NavBar"}>
   

        <ul class="flex">
    
  <li class="mr-6">
  <Link to="/about" class="a bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded " >
  About
</Link>
  
  </li>
  <li class="mr-6">
  <Link to="/projects" class="a bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded ">
  Projects</Link>
 
  </li>
  <li class="mr-6">
  <Link to="/articles" class="a bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded ">
  Articles</Link>
 
 
  </li>

</ul>
</div>
    </div>
   
  </div>
</nav>
)

export default Navbar;