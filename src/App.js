import React from 'react';
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


<div className="App-header">


{/* 

<h1 className='h1'> Vaishnavi Dwivedi </h1>
        <p className="body-text">
          This page is currently under construction!
        </p>
        
         <button class="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded">
 
  <a
          className="App-link"
          href="https://drive.google.com/file/d/1_Vn7xEqxIC_zUSCiwE5mDIMKwoaDeOpw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
   Have a look at my resume
        </a> 
</button> */}
    <Route exact path="/about" component={About} />
    <Route path="/projects" component={Projects} />
        <Route path="/articles" component={Articles} />

       
        
           
            
     
        
        
      </div>
      
</div>

  
    </BrowserRouter>
  );
}

export default App;
