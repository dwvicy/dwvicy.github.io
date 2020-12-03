import React from "react";
import './navitems.css';
import logo from './ww84.png';

import { Link } from 'react-router-dom'; 

const Navbar = () => (
<nav class="flex items-center  flex-wrap p-2" >
  <div class="flex items-center flex-shrink-0">
  <img src={logo} className="Logo" alt="logo" />
  <div className="body-text text-white font-bold py-2 px-4">@dwvicy</div>
  </div>
 
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
    <div className={"NavBar"}>
   

        <ul class="flex">
    
  <li class="mr-6">
  <button class="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded" >
  <Link to="/" className="link">About</Link>
</button>
  
  </li>
  <li class="mr-6">
  <button class="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded">
  <Link to="/projects" className="link">Projects</Link></button>
 
  </li>
  <li class="mr-6">
  <button class="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded">
  <Link to="/articles" className="link">Articles</Link></button>
 
 
  </li>

</ul>
</div>
    </div>
   
  </div>
</nav>
)

export default Navbar;