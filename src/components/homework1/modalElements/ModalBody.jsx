import { ModalTextContent } from '../Modals.styled';

export default function ModalBody ({children, text}){
  return (
    <ModalTextContent className='text'>
      {text}
      {children}
    </ModalTextContent>
  )
}