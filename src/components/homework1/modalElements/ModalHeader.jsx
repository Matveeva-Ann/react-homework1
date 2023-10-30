import { ModalTitle } from '../Modals.styled';

export default function ModalHeader({ title, children }) {
  return (
    <>
      {children}
      <ModalTitle>{title}</ModalTitle>
    </>
  )
}