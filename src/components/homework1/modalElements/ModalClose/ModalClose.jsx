import { RxCross2 } from "react-icons/rx";
import './ModalClose.css';
import {iconSize} from 'constants';

export default function ModalClose ({onClick}){
  return (
    <RxCross2 onClick={onClick} className='cross' size={iconSize.md}></RxCross2>
  )
}