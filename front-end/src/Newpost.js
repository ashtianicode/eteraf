import React from 'react';
import { Jumbotron,option,ControlLabel,FormControl,FormGroup,form, Button } from "react-bootstrap";


export default class Newpost extends React.Component {
  constructor(){
    super();
    this.state={
      text : ""
    }
    this.inputtext= this.inputtext.bind(this);
    this.postsubmit= this.postsubmit.bind(this);

    }


inputtext(event){
  var texti = event.target.value;
  this.setState({text:texti})
}
postsubmit(){

  var data = new FormData();
  data.append("text",this.state.text);
  data.append("mode", "d");

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "http://localhost:8080/web/post/submit/");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("postman-token", "073f1ba5-2f4b-3187-adad-aeb56ef5bef3");

  xhr.send(data);




}

    render(){
        return(
            <div>

            <div className="container">
            <Jumbotron>

            <div className="row">
            <div className="col-sm-1" ></div>
            <div className="col-sm-10" >

            <form>

            <span style={{fontSize:'20px'}}>Choose a Category</span>
                <FormGroup controlId="formControlsSelect" style={{width:'130px'}} >
               <FormControl componentClass="select" placeholder="select">
                 <option value="select">dream</option>
                 <option value="select">fantasy</option>
                 <option value="select">first experience</option>
                 <option value="select">guilt</option>
                 <option value="select">lie</option>
                 <option value="select">pain</option>
                 <option value="select">question</option>
                 <option value="select">random feeling</option>
                 <option value="select">truth</option>
                 <option value="select">wild experience</option>
                 <option value="select">other</option>


               </FormControl>
               </FormGroup>

               <FormGroup bsSize="large">
                 <FormControl type="text" placeholder="confession text" onChange={this.inputtext} />
               </FormGroup>

              </form>
               <Button onClick={this.postsubmit}>CONFESS</Button>




            </div>
            <div className="col-sm-1" ></div>

            </div>
            </Jumbotron>

            </div>
            </div>

        )
    }
}
