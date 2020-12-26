import React from 'react';
import Typewriter from 'typewriter-effect';
import './type.css'

export default function TypeEff(){

    return(
        <div>
<Typewriter
options={
  {
    cursorClassName: "big-font",
    
  }
}
className="big-font"
  onInit={(typewriter) => {
    typewriter.changeDelay(55)
    .typeString('<span style="font-size: xx-large">Hello, I\'m Vaishnavi! :)</span></br></br>')
    .typeString('<span style="font-size: xx-large">Who am I?</span>')
    .pauseFor(1000)
    .deleteChars(9)
    .typeString('<span style="font-size: x-large">I\'m a Software Developer and Web Scrum Master @ Bottle Co.</span></br><br>')

    // .pauseFor(2500)
    // .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
    .start();

  }}
/>

</div>
    )
}
