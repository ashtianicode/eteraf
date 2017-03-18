import React from 'react';
import {render} from 'react-dom';
import Pages from './pager.js'
import Newpost from './Newpost.js';
import NavBar from './navbar.js'
import ModalShow from './show_post_modal.js'


class Main extends React.Component{

  constructor(){
    super();
    this.state={
          modalpoststate:false,
          modalposttext:"",
          confessmode:"",
    }


    this.showthepostmodal=this.showthepostmodal.bind(this);
  }

  showthepostmodal(summery,state,confessmode){
  // a function to be called from pager links and setstate the text and state of the modal
   this.setState({modalpoststate: state,modalposttext:summery,confessmode:confessmode});
  }



    render(){
      return(
        <div>
        <NavBar/>
        <Newpost/>
        <Pages showthepost={this.showthepostmodal}/>
         <ModalShow showthepost={this.showthepostmodal} texti= {this.state.modalposttext}   modalpoststate= {this.state.modalpoststate} confessmode={this.state.confessmode} />
        </div>
      )
    }


}
render(<Main/>,document.getElementById('main'));
