import { RxCross2 } from "react-icons/rx";
import './ModalClose.css';

export default function ModalClose ({onClick}){
  return (
    <RxCross2 onClick={onClick} className='cross'></RxCross2>
  )
}