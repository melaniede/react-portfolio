import React from "react";
// import workbytes from 'assets/images/Melanie_Headshot2.png';
// import weworkout from 'assets/images/Melanie_Headshot2.png';
// import notetaker from 'assets/images/Melanie_Headshot2.png';
// import workday from 'assets/images/Melanie_Headshot2.png';
// import password from 'assets/images/Melanie_Headshot2.png';
// import jsquiz from 'assets/images/Melanie_Headshot2.png';


// import "./style.css";

function Portfolio () {
    return (
<div class="container page-top">



<div class="row">


    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
        <a href="https://relizabet.github.io/Work_Bytes/" class="fancybox" rel="ligthbox">
            <img  src={workbytes} class="zoom img-fluid "  alt="Work Bytes"/>
           
        </a>
      <a class="card-title" href="https://relizabet.github.io/Work_Bytes/">Work Bytes</a>
      <br/>
      <a class="card-text" href="https://github.com/melaniede/Work_Bytes">View Code</a>
    </div>

    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
        <a href="https://weworkoutapp.herokuapp.com/"  class="fancybox" rel="ligthbox">
            <img  src={weworkout} class="zoom img-fluid"  alt="We Workout"/>
        </a>
        <a class="card-title" href="https://weworkoutapp.herokuapp.com/">We Workout</a>
        <br/>
        <a class="card-text" href="https://github.com/melaniede/we-workout">View Code</a>
    </div>
    
    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
        <a href="https://afternoon-taiga-69723.herokuapp.com/" class="fancybox" rel="ligthbox">
            <img  src={notetaker} class="zoom img-fluid "  alt="Note Taker"/>
        </a>
        <a class="card-title" href="https://afternoon-taiga-69723.herokuapp.com/">Note Taker</a>
        <br/>
        <a class="card-text" href="https://github.com/melaniede/express-note-taker">View Code</a>
    </div> 

    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
        <a href="https://melaniede.github.io/work-day-scheduler/" class="fancybox" rel="ligthbox">
            <img  src={workday} class="zoom img-fluid "  alt="Workday Scheduler"/>
        </a>
        <a class="card-title" href="https://melaniede.github.io/work-day-scheduler/">Work Day Scheduler</a>
        <br/>
        <a class="card-text" href="https://github.com/melaniede/work-day-scheduler">View Code</a>
    </div>
    
    <div class="col-lg-3 col-md-4 col-xs-6 thumb">
        <a href="" class="fancybox" rel="ligthbox">
            <img  src={password} class="zoom img-fluid "  alt="Password Generator"/>
        </a>
        <a class="card-title" href="https://melaniede.github.io/password-generator/">Password Generator</a>
        <br/>
        <a class="card-text" href="https://github.com/melaniede/password-generator">View Code</a>
    </div>
    
     <div class="col-lg-3 col-md-4 col-xs-6 thumb">
        <a href="" class="fancybox" rel="ligthbox">
            <img  src={jsquiz} class="zoom img-fluid "  alt="Javascript Quiz"/>
        </a>
        <a class="card-title" href="https://github.com/melaniede/javascript-code-quiz">Javascript Quiz</a>
        <br/>
        <a class="card-text" href="https://melaniede.github.io/javascript-code-quiz/">View Code</a>
    </div>
    
     
</div>   
   
</div>
    )
}

export default Portfolio;

 