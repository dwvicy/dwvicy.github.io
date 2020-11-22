import React from 'react';
import Button from 'react-bootstrap/Button';
import logo from './ww84.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Logo" alt="logo" />
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
        </a> */}
         <Button variant="outline-light"><a className='App-link'href='https://drive.google.com/file/d/1bkohBsfrMk2q1qhbg_xf-CEWo_SsISic/view?usp=sharing'>Have a look at my resume</a></Button>{' '}
      </header>
    </div>
  );
}

export default App;
