import React from 'react';
import ModalShow from './show_post_modal.js';
import { Pagination } from "react-bootstrap";

var items =[];
var row=[];
var table=[];



export default class Pages extends React.Component{
  constructor(){
    super();
    this.state={
      activePage:1,
      data:{},
      jsonlength:1,

    }



    this.handleSelect= this.handleSelect.bind(this);
    this.shownextpage =this.shownextpage.bind(this);
    this.showpage =this.showpage.bind(this);
    this.findgategorynumbers =this.findgategorynumbers.bind(this);



  }

  componentDidMount() {


  fetch('http://localhost:8080/api/posts/?format=json', {
    method: 'get'
  }).then(response => {
    return  response.json().then(json => {
      const postsjson=json;
      this.setState({data:postsjson,jsonlength : Object.keys(postsjson).length/10 | 0});
      this.shownextpage(1);
      this.forceUpdate();




    })

  });
}

findgategorynumbers(){
  const data = this.state.data;
const counts = {};
  data.forEach(function(post){    counts[post["confessmode"]]=(counts[post["confessmode"]] || 0) + 1;    });
this.props.setnumbers(counts);

}



  showpage(p){

    const postsjson = this.state.data;
      for(var r=p;r<p+3;r++){
      items=[];
      row=[];


    for(var i = r*3  ;  i > (r*3)-3 ;  i--   ){
      const text =postsjson[i]["text"];
      const confessmode = postsjson[i]["confessmode"];
      const modes= {"d":"A-DREAM.png","f":"A-FANTASY.png","fi":"A-FIRST-EXPERIENCE.png","g":"A-GUILT.png","l":"A-LIE.png","p":"A-PAIN.png","q":"A-QUESTION.png","r":"A-RANDOM-FEELING.png","t":"A-TRUTH.png","w":"A-WILD-EXPERIENCE.png","o":"OTHER.png"}
      const imgurl= "http://localhost/confess/confess/front-end/src/images/"+modes[confessmode];
      const summery=text.slice(0,150) + " ...";
      var key= "post"+i;
      const mode=modes[confessmode].slice(0,-4);
      items.push(


        <div className="col-sm-3" key={key} id="postbox">
        <a    onClick={()=>{this.props.showthepost(text,true,mode)}} >
         <img src={imgurl} /><span>  </span>
         <span>{mode}</span><br />
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









  shownextpage(eventKey){
    const p = (3* (eventKey-1)) +1;
    table=[];
    this.showpage(p);
    this.findgategorynumbers()


  }


  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey // fuck! the setSate is asynchronous

    });

this.shownextpage(eventKey);
  }


    render(){


      return(


      <div>


      <div className="container" >
      {table}
      <Pagination
        bsSize="medium"
        items={this.state.jsonlength}
        activePage={this.state.activePage}
        onSelect={this.handleSelect}
        bsClass='pagination' />

      </div>




      </div>

    )

  }



}
