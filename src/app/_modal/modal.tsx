import { useState } from 'react'
import modalStyle from './modal.module.css'
import { Karla } from 'next/font/google'
import { useModalDisplayContext } from '../_Context/ModalDisplayContext'

const paragraphFont = Karla({
    subsets:['latin'],
    weight:'400'
})

export default function Modal(){

    const {modalDisplay,setModalDisplay} = useModalDisplayContext();

    const toggleDisplayModal = ()=>{
        if(modalDisplay){
            setModalDisplay((prev)=>!prev)
        }
    }

    return(
        <div style={paragraphFont.style} className={modalDisplay?modalStyle.ModalContainer:modalStyle.ModalComponentNoDisplay} id='ModalContainer'>
            <span className={modalStyle.ModalComponent}>
                <p>Thank you for reaching out.<br/> I will get back to you as soon as possible.<br/><br/>Cheer!!</p>
                <button className={modalStyle.CloseModalButton} onClick={toggleDisplayModal}>Close</button>
            </span>
        </div>
    )
}