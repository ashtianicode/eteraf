import React from 'react';
import { Modal, Button ,ButtonToolbar } from "react-bootstrap";


 class MyLargeModal extends React.Component{


  render() {

const imgurl= "http://localhost/confess/confess/front-end/src/images/"+this.props.confessmode+".png";
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{this.props.confessmode}
          <span> <img src={imgurl} /></span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{this.props.textinbodymodal}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}



export default class ModalShow extends React.Component{


      render() {
        let lgClose = () => this.props.showthepost(null,false,null);

        return (
            <div>
            <MyLargeModal show={this.props.modalpoststate} onHide={lgClose} textinbodymodal={this.props.texti} confessmode={this.props.confessmode}/>
            </div>
        )
      }



}
