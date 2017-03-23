import React from 'react';
import { Jumbotron,option,ControlLabel,FormControl,FormGroup,form, Button } from "react-bootstrap";


export default class Newpost extends React.Component {
  constructor(){
    super();
    this.state={
      text : "",
      mode:"d"
    }
    this.changehandler= this.changehandler.bind(this);
    this.postsubmit= this.postsubmit.bind(this);

    }


changehandler(event){
  var value = event.target.value;
  var id = event.target.id;


  if(id=="text"){
  this.setState({text:value});}
  else if (id=="mode"){
    this.setState({mode:value});

  }
}
postsubmit(){

  var data = new FormData();
  data.append("text",this.state.text);
  data.append("mode", this.state.mode);

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


this.props.refreshafterpost();

}




    render(){
        return(
            <div>

            <div className="container">
            <Jumbotron>

            <div className="row">
            <div className="col-sm-10" >

            <form>

            <span style={{fontSize:'20px'}}>Choose a Category</span>
                <FormGroup controlId="formControlsSelect" style={{width:'130px'}} controlId	="mode">
               <FormControl componentClass="select" placeholder="select" onChange={this.changehandler} >
                 <option value="d">dream</option>
                 <option value="f">fantasy</option>
                 <option value="fi">first experience</option>
                 <option value="g">guilt</option>
                 <option value="l">lie</option>
                 <option value="p">pain</option>
                 <option value="q">question</option>
                 <option value="r">random feeling</option>
                 <option value="t">truth</option>
                 <option value="w">wild experience</option>
                 <option value="o">other</option>


               </FormControl>
               </FormGroup>

               <FormGroup bsSize="large" controlId	="text">
                 <FormControl type="text" placeholder="confession text" onChange={this.changehandler}  />
               </FormGroup>

              </form>
               <Button onClick={this.postsubmit}>CONFESS</Button>




            </div>

            </div>
            </Jumbotron>

            </div>
            </div>

        )
    }
}
