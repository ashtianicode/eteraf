import React from 'react';
import "react-bootstrap"
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
    console.log(this.state.pagenumber);
    var jsonlength = Object.keys(postsjson).length/10 | 0;
    var pagenumber = this.state.pagenumber;
    components =[];
    for(var i = pagenumber*6  ;  i > (pagenumber*6)-6 ;  i--   ){
      var text =postsjson[i]["text"];
      var confessmode = postsjson[i]["confessmode"];
      var modes= {"d":"A-DREAM.png","f":"A-DREAM.png","fi":"A-FIRST-EXPERIENCE.png","g":"A-GUILT.png","l":"A-LIE.png","p":"A-PAIN.png","q":"A-QUESTION.png","r":"A-RANDOM-FEELING.png","t":"A-TRUTH.png","w":"A-WILD-EXPERIENCE.png","o":"OTHER.png"}
      var imgurl= "file:///home/hobbyist/t/confess/confess/front-end/src/images/"+modes[confessmode];
      var summery=text.slice(0,150) + " ...";
      components.push(


        <div className="col-sm-2">
        <a data-toggle="modal" data-target="#myModal"  class="thumbnail">
         <img src={imgurl} />
        { summery}
        </a>
        </div>




      )
    }
    this.setState({pagenumber:this.state.pagenumber+1});
    if (this.state.pagenumber == jsonlength){
      this.setState({pagenumber:1});
      console.log("back to first");
    }





  }






  render(){


    return(


      <div>
      <button  onClick={this.shownextpage} >next</button>
      <div>the page number is : {this.state.pagenumber}</div>

      <div className="container">
      <div className="row">
      {components}
      </div>
      </div>


      <div class="container">

      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">

          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>
</div>


      </div>

    )

  }



}
