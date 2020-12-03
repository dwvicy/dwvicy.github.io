import React from 'react';
import Button from 'react-bootstrap/Button';

import Projects from './pages/projects';
import Articles from './pages/articles';
import About from './pages/about';
import './App.css';
import Navbar from './components/navitems';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
function App() {
 return(
<BrowserRouter>
<div className="App">

<Navbar  />

</div>





<div className="App-header">
    <Route exact path="/" component={About} />
    <Route path="/projects" component={Projects} />
        <Route path="/articles" component={Articles} />

       
      
           
            
     
        
{/*         
      <h1 className='body'> Vaishnavi Dwivedi </h1>
        <p className="body">
          This page is currently under construction!
        </p>
        {/* <a
          className="App-link"
          href="https://drive.google.com/file/d/1bkohBsfrMk2q1qhbg_xf-CEWo_SsISic/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here's my resume
        </a> }
         <button class="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded">
  Have a look at my resume
</button>

       */}
    </div>
    </BrowserRouter>
  );
}

export default App;
