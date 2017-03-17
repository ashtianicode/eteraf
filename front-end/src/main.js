import React from 'react';
import {render} from 'react-dom';
import Pager from './pager.js'
import Newpost from './Newpost.js';


class Main extends React.Component{
  constructor(){
    super();
    this.state={
    }
  }

    render(){
      return(
        <div>

        <Newpost/>
      <Pager/>

        </div>
      )
    }


}
render(<Main/>,document.getElementById('main'));
