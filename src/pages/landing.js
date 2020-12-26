import React from 'react';
import Skills from '../components/skill-component';
import Info from '../components/vaish-me';

export default function Landing(){
    return(
<div class="mx-10 my-8 sm:my-10">
         <div class="container inline-flex flex-row flex-wrap justify-between items-center">
     
     <Info />

             <a href="https://imgur.com/wZ5Grm9"><img src="https://i.imgur.com/wZ5Grm9.png" alt="" /></a>
    
           
           
           
             </div> 
             <div class="space-y-10">
             <Skills/>
             </div> 
             
        </div>
       
    )
}