import Button from "./modalElements/Button";
import ModalBody from "./modalElements/ModalBody";
import ModalFooter from "./modalElements/ModalFooter";
import ModalHeader from "./modalElements/ModalHeader";
import ModalWrapper from "./modalElements/ModalWrapper";


export default function ModalText({ onClick }) {
  return (
    <ModalWrapper onClick={onClick}>
      <ModalHeader title='Add Product “NAME”'></ModalHeader>
      <ModalBody text='Description for you product'></ModalBody>
      <ModalFooter>
        <Button onClick={onClick} btnColor='baseColor'>ADD TO FAVORITE</Button>
      </ModalFooter>
    </ModalWrapper>
  )
}