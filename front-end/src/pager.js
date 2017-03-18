import React from 'react';
import "react-bootstrap"
import ModalShow from './show_post_modal.js';
import { Pager } from "react-bootstrap";

var postsjson;
var gotthejson =0;
var items =[];
var row=[];
var table=[];




export default class Pages extends React.Component{
  constructor(){
    super();
    this.state={
      pagenumber:0
    }



    this.shownextpage =this.shownextpage.bind(this);
    this.showpage =this.showpage.bind(this);


  }





  showpage(p){
    for(var r=p;r<p+3;r++){
      items=[];
      row=[];


    for(var i = r*3  ;  i > (r*3)-3 ;  i--   ){
      const text =postsjson[i]["text"];
      const confessmode = postsjson[i]["confessmode"];
      const modes= {"d":"A-DREAM.png","f":"A-FANTASY.png","fi":"A-FIRST-EXPERIENCE.png","g":"A-GUILT.png","l":"A-LIE.png","p":"A-PAIN.png","q":"A-QUESTION.png","r":"A-RANDOM-FEELING.png","t":"A-TRUTH.png","w":"A-WILD-EXPERIENCE.png","o":"OTHER.png"}
      const imgurl= "file:///home/hobbyist/t/confess/confess/front-end/src/images/"+modes[confessmode];
      const summery=text.slice(0,150) + " ...";
      var key= "post"+i;
      const mode=modes[confessmode].slice(0,-4);
      items.push(


        <div className="col-sm-3" key={key} >
        <a    onClick={()=>{this.props.showthepost(text,true,mode)}} >
         <img src={imgurl} />
         <span>{mode}</span>
      <div>  { summery}</div>
        </a>
        </div>




      )
      if ((i-1)%3 == 0){
        row.push(<div className="row">{items}</div>);
      }


    }



table.push(row);

}
  }


shownextpage(a){

  var jsonlength = Object.keys(postsjson).length/10 | 0;
  if (this.state.pagenumber == jsonlength){
    this.setState({pagenumber:0});
    console.log("back to first");
  }
  const p = 3* this.state.pagenumber +1
  table=[];
  this.showpage(p);
  this.setState({pagenumber:this.state.pagenumber+a});
  if(this.state.pagenumber==0){
    a=0;
  }

}

componentDidMount()
{
  fetch('http://localhost:8080/api/posts/?format=json', {
    method: 'get'
  }).then(function(response) {
    return  response.json().then(function(json){
      postsjson=json;


    })

  });


}

  render(){


    return(


      <div>


      <div className="container">
      {table}
      <Pager>
  <Pager.Item previous onClick={()=> this.shownextpage(-1) }>&larr; Previous Page</Pager.Item>
  <Pager.Item next onClick={()=> this.shownextpage(1) }>Next Page &rarr;</Pager.Item>
</Pager>
      </div>



      </div>

    )

  }



}
