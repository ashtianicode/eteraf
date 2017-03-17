import React from 'react';


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
            text :<input type="text" id="texti" onChange={this.inputtext} />
            <button  onClick={this.postsubmit}>submit</button>
            <p>the text is :{this.state.text}</p>

            </div>

        )
    }
}
