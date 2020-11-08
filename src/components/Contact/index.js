import React from "react";
// import "./style.css";

function Contact () {
    return (
        <div class="container bg-light">
      <h1> Contact</h1>
      <hr/>
  
      <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jane Doe"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Email</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="example@gmail.com"/>
          </div>
          <div class="form-group">
              <label for="exampleInputPassword1">Message</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your Message"/>
            </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <div class="text-center">
          <ul class="list-unstyled mb-0">
              <li><i></i>
                  <p>(207)808-1014</p>
              </li>

              <li><i></i>
                  <p>melaneede@yahoo.com</p>
              </li>
          </ul>
      </div>
      
    </div>
    )
}

export default Contact;
