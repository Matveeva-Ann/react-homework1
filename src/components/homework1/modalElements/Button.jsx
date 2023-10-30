import { ModalBtn } from '../Modals.styled';

export default function Button({ children, onClick, btnColor }) {
  return (
    <ModalBtn type="button" onClick={onClick} btnColor={btnColor}>
      {children}
    </ModalBtn>
  )
} 