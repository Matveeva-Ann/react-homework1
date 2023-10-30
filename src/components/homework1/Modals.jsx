import { Component } from "react";
import Button from "../homework1/modalElements/Button";
import ModalImage from "../homework1/ModalImage/ModalImage";
import ModalText from "./ModalText";
import { BtnWrapperHome } from "./Modals.styled";

export default class Modals extends Component {
  state = {
    isOpenFirst: false,
    isOpenSecond: false,
  }

  toggleModal = (modalName) => {
    this.setState(prevState => ({ [modalName]: !prevState[modalName], }))
  }

  render() {
    return (
      <div>
        <BtnWrapperHome>
          <Button onClick={() => this.toggleModal('isOpenFirst')} btnColor='baseColor'>Open first modal</Button>
          <Button onClick={() => this.toggleModal('isOpenSecond')} btnColor='whiteColor'>Open second modal</Button>
        </BtnWrapperHome>
        {this.state.isOpenFirst && <ModalImage onClick={() => this.toggleModal('isOpenFirst')} />}
        {this.state.isOpenSecond && <ModalText onClick={() => this.toggleModal('isOpenSecond')} />}
      </div>
    )
  }
}

