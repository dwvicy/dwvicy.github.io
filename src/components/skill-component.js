
import React from 'react';
import skills from '../content/skills'
export default class Skills extends React.Component{
    state ={
        isLoaded: false,
        skills: []
    }
    componentDidMount() {
        // I will use fake api from jsonplaceholder website
        // this return 100 datas 
        fetch('../content/skills')
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    data : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }
    constructor(props){
        super(props);
        this.state = {            
            skills: skills         
        };
    }
    render(){
        const {skills} = this.state;
    return(
        <div class="my-24 grid mx-5 sm:mx-10 grid-col-1 grid-rows-16 sm:grid-flow-col sm:grid-cols-5 sm:grid-rows-5  gap-5">
            
                 {
      skills.map(skill => (
        <div>
            <div class="inline-flex flex-row space-x-2"><img class="h-4 w-auto sm:h-6  px-1" src={skill.logo} alt=""/>
            <p>{skill.name}</p></div>
        <div className="relative pt-1">
        <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-pink-200">
          <div style={{width: skill.percent+"%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
        </div>
      </div>
                
      </div>     
           
      )
      )}
           </div>     
    

    )}}