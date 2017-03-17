import React from 'react';
var postsjson;
var gotthejson =0;
var components =[];



export default class Pager extends React.Component{
  constructor(){
    super();
    this.state={
      pagenumber:1
    }


    fetch('http://localhost:8080/api/posts/?format=json', {
      method: 'get'
    }).then(function(response) {
      return  response.json().then(function(json){
        postsjson=json;


      })

    });

    this.shownextpage =this.shownextpage.bind(this);
  }




  shownextpage(){
    var jsonlength = Object.keys(postsjson).length/10 | 0;
    console.log(jsonlength);

    if (true){
      console.log("helloooooo");
      this.setState({pagenumber:1});
      console.log("in if :",this.state.pagenumber);

    }

    var pagenumber = this.state.pagenumber;
    console.log("after if :",pagenumber);
    components =[];
    for(var i = pagenumber*10  ;  i > (pagenumber*10)-10 ;  i--   ){
      var text =postsjson[i]["text"];
      var summery=text.slice(0,100);
      components.push(

        <td id="tdata"> <a href="#"> { summery}</a> </td>

      )
    }
    this.setState({pagenumber:this.state.pagenumber+1});






  }






  render(){


    return(
      <div>
      <button  onClick={this.shownextpage} >next</button>

      <div>the page number is : {this.state.pagenumber}</div>


      <div class="container">
      <table class="table table-condensed" id="mytable">
      <tbody>
      <tr>
      <div>{components}</div>
      </tr>
      </tbody>
      </table>
      </div>
      </div>

    )

  }



}
