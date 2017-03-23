import React from 'react';
import {render} from 'react-dom';
import Pages from './pager.js'
import Newpost from './Newpost.js';
import ModalShow from './show_post_modal.js'
import Category from './categories.js'



export default class Main extends React.Component{

  constructor(){
    super();
    this.state={
          modalpoststate:false,
          modalposttext:"",
          confessmode:"",
          counts:{}
    }


    this.showthepostmodal=this.showthepostmodal.bind(this);
    this.categorynumbers=this.categorynumbers.bind(this);
    this.refreshafterpost=this.refreshafterpost.bind(this);

  }

  showthepostmodal(summery,state,confessmode){
  // a function to be called from pager links and setstate the text and state of the modal
   this.setState({modalpoststate: state,modalposttext:summery,confessmode:confessmode});
  }

categorynumbers(c){
this.setState({counts:c});

}
refreshafterpost(){
  this.forceUpdate();

}



    render(){
      return(
        <div>




 <Newpost refreshafterpost={this.refreshafterpost}/>
 <Pages setnumbers= {this.categorynumbers} showthepost={this.showthepostmodal}/>
  <ModalShow showthepost={this.showthepostmodal} texti= {this.state.modalposttext}   modalpoststate= {this.state.modalpoststate} confessmode={this.state.confessmode} />
  <Category counts ={ this.state.counts}/>
        </div>
      )
    }


}
