
import React from 'react';
import github from './icons-footer/github.svg';
import reddit from './icons-footer/reddit.svg';
import behance from './icons-footer/behance.svg';
import linkedin from './icons-footer/linkedin.svg';
import medium from './icons-footer/medium.svg';
import youtube from './icons-footer/youtube.svg';
import dribbble from './icons-footer/dribbble.svg';
import google from './icons-footer/google.svg';
import instagram from './icons-footer/instagram.svg';
import stackoverflow from './icons-footer/stackoverflow.svg';



export default function Footer(){
    return(
        <footer>
        <div class="container mx-auto px-6 py-3 flex justify-center items-center">
        <img class="h-6 w-auto md:h-10  px-1" src={github} alt=""/>
        <img class="h-6 w-auto md:h-10 px-1" src={linkedin} alt=""/>
        <img class="h-6 w-auto md:h-10 px-1" src={instagram} alt=""/>
        <img class="h-6 w-auto md:h-10 px-1" src={youtube} alt=""/>
        <img class="h-6 w-auto md:h-10 px-1" src={google} alt=""/>
        <img class="h-6 w-auto md:h-10 px-1" src={dribbble} alt=""/>
        <img class="h-6 w-auto md:h-10 px-1" src={behance} alt=""/>
        <img class="h-6 w-auto md:h-10 px-1" src={reddit} alt=""/>
        <img class="h-6 w-auto md:h-10 px-1" src={stackoverflow} alt=""/>
        <img class="h-6 w-auto md:h-10 px-1" src={medium} alt=""/>
    
        </div>
    </footer>
    )
}
