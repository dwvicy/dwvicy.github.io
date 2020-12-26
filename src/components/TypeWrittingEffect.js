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
    deleteSpeed: 1,
    
  }
}
className="big-font"
  onInit={(typewriter) => {
    typewriter.changeDelay(55)
    .typeString('<span style="font-size: larger">Hello, I\'m <b> Vaishnavi</b>! :)</span>  ')
    .pauseFor(900)
    .typeString('<span style="font-size: larger">Who am I?</span>')
    .pauseFor(1000)
    .deleteChars(9)
    
    .typeString('<span style="font-size: larger">I\'m a <b>Software Developer</b> and <b>Web Scrum Master</b> @ <a href="https://www.bottlehq.com/"><span style="color: #56A286"><b>Bottle Co.</b></span></a></span>  <br><br>')
    .typeString('<span style="font-size: larger">On August 12, 2020, I was appointed <strong>Developer Student Club Lead</strong> at my campus')
    .typeString('<span style="font-size: larger"> by <span style="color: #f4c20d"><b>Google</b>.</span>  Since then I\'ve hosted <b>20+ technical  talks</b> and sessions for over <b>500 members</b> of our club. </span>  <br><br>')
    .typeString('<span style="font-size: larger"> I\'m a staunch supporter of<b> climate  action </b>and<b> sustainability</b>. I\'m passionate about solving  <b>global real-world challenges</b> using <b>Data</b>, while preserving the <b>privacy</b> of the owners. I\'ve written many <i>blogs</i>  and actively <b>researching</b> in these areas.</span>  <br><br>')
    .typeString('<span style="font-size: larger">Get to know me better by navigating  through this portfolio!</span>')
    // .pauseFor(2500)
    // .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
    .start();
    typewriter.pauseFor(1000);
    

  }}
/>

</div>
    )
}
