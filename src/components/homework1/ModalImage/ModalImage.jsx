import Button from "../modalElements/Button";
import ModalBody from "../modalElements/ModalBody";
import ModalFooter from "../modalElements/ModalFooter";
import ModalHeader from "../modalElements/ModalHeader";
import ModalWrapper from "../modalElements/ModalWrapper";
import image from './img/image.jpg';
import { ProductImg } from "../Modals.styled";

export default function ModalImage({ onClick }) {
  return (
    <ModalWrapper onClick={onClick}>
      <ModalHeader title='Product Delete!'>
        <ProductImg src={image} className="product__img" alt="product img" />
      </ModalHeader>
      <ModalBody text='By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted.'></ModalBody>
      <ModalFooter>
        <Button onClick={onClick} btnColor='baseColor'>NO, CANCEL</Button>
        <Button onClick={onClick} btnColor='whiteColor'>YES, DELETE</Button>
      </ModalFooter>
    </ModalWrapper>
  )
}