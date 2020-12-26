
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
import twitter from './icons-footer/twitter.svg';



export default function Footer(){
    return(
        <footer>
        <div class="container mx-auto px-6 py-3 flex justify-center items-center">
        <a href="https://github.com/dwvicy" target="_blank" rel="noopener noreferrer">
            <img class="h-6 w-auto md:h-10  px-1" src={github} alt=""/></a>
            <a href="https://linkedin.com/in/dwvicy" target="_blank" rel="noopener noreferrer">
            <img class="h-6 w-auto md:h-10 px-1" src={linkedin} alt=""/></a>
            <a href="https://twitter.com/dwvivivi" target="_blank" rel="noopener noreferrer">
            <img class="h-6 w-auto md:h-10  px-1" src={twitter} alt=""/></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img class="h-6 w-auto md:h-10 px-1" src={instagram} alt=""/></a>
            <a href="https://bit.ly/dscrait-youtube" target="_blank" rel="noopener noreferrer">
            <img class="h-6 w-auto md:h-10  px-1" src={youtube} alt=""/></a>
            <a href="mailto:vaishdw2207@gmail.com" target="_blank" rel="noopener noreferrer">
            <img class="h-6 w-auto md:h-10  px-1" src={google} alt=""/></a>
            <a href="https://github.com/dwvicy" target="_blank" rel="noopener noreferrer">
            <img class="h-6 w-auto md:h-10  px-1" src={dribbble} alt=""/></a>
            <a href="https://github.com/dwvicy" target="_blank" rel="noopener noreferrer">
            <img class="h-6 w-auto md:h-10  px-1" src={behance} alt=""/></a>
            <a href="https://github.com/dwvicy" target="_blank" rel="noopener noreferrer">
            <img class="h-6 w-auto md:h-10  px-1" src={reddit} alt=""/></a>
            <a href="https://github.com/dwvicy" target="_blank" rel="noopener noreferrer">
            <img class="h-6 w-auto md:h-10  px-1" src={stackoverflow} alt=""/></a>
            <a href="https://medium.com/@Vaishdw2207" target="_blank" rel="noopener noreferrer">
            <img class="h-6 w-auto md:h-10  px-1" src={medium} alt=""/></a>
        
    
        </div>
    </footer>
    )
}
