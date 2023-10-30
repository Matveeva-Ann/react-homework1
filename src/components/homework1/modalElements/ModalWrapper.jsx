
import ModalClose from './ModalClose/ModalClose';
import { ModalBg, ModalContainer } from '../Modals.styled';

export default function ModalWrapper ({children, onClick}){
  function closeModal (event) {
    if (event.target.getAttribute('data-modal')){
      onClick();
    }
  }
  
  return (
    <ModalBg data-modal="true" onClick={(event) => closeModal(event)}>
      <ModalContainer>
        <ModalClose onClick={onClick}></ModalClose>
        {children}
      </ModalContainer>
    </ModalBg>
  )
}