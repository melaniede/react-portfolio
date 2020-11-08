import React from "react";
import headshot from '../../assets/images/Melanie_Headshot2.png';
import "./style.css";

function Summary () {
    return (
        <div class="container bg-light">
        <div class="row">
          <div class="col-md-8">
            <div class="page-header">
              <h1>About Me</h1>
              <hr/>
            </div>
            <div class="row">
              <div class="col-md-3">
                <img src={headshot} alt="Melanie's Headshot" class="img-thumbnail"/>
              </div>
              <div class="col-md-9">
                <p>
                  Melanie DeBarros is currently a Scrum Master II at Liberty Mutual Insurance in the Boston office. She has been working closely with software development teams for 6 years. 
                  She has always been interested in technology. Her recent enrollment into the UNH Coding Bootcamp gives her the opportunity to take her technology knowledge to the next level, 
                  by providing her with tangible technology development experience.
                </p>
                <a href="https://drive.google.com/file/d/1WYHUo2cMjElgFK77fK5zPLWE5lCYnuLr/view?usp=sharing" target="_blank" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Resume</a>
                <a href="https://www.linkedin.com/in/melaniedebarros/" target="_blank" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">LinkedIn</a>                
                <a href="https://github.com/melaniede" target="_blank" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">GitHub</a>                
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Summary;
