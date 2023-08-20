'use client'
import formStyle from './contactForm.module.css';
import { Markazi_Text,Karla} from 'next/font/google';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm,SubmitHandler} from 'react-hook-form';
import emailjs from '@emailjs/browser'
import Modal from '../_modal/modal';
import { useModalDisplayContext } from '../_Context/ModalDisplayContext';
import { useRef } from 'react';


const karlaFont = Karla({
    subsets:['latin']
});

const titleFont = Markazi_Text({
    subsets: ['latin'],
    weight:'700',
})

enum PurposeOfMessage{
    Connect = 'Connect',
    Collaborate = 'Collaborate',
    Hire = 'Hire',
    Contact = 'Contact',
    Other = 'Other'
}

interface FormInputType{
    name:string,
    email:string,
    purpose?:PurposeOfMessage,
    message: string
}

export default function ContactForm(){

    const {modalDisplay,setModalDisplay} = useModalDisplayContext();
    const formRef = useRef();
    
    const schema = yup.object({
        name: yup.string().required('This field is required!'),
        email: yup.string().email('Please enter a valid email address!').required('This field is required!'),
        message: yup.string().min(25,'Please enter a minimum of 25 characters!').required('This field is required!')
    })

    const {register,reset,handleSubmit,formState:{errors}} = useForm<FormInputType>({resolver:yupResolver(schema),mode:'onBlur'});

    const onSubmit:SubmitHandler<FormInputType> = async (data,event)=>{
        event?.preventDefault()
        
        //Sends email using emailjs service
        await emailjs.sendForm('default_service','Personal_Website_Form',document.forms[0],'Dq8vu-ZgidQx6Hvrm').then((result)=>console.log(result.text),(error)=>console.log(error.text))
        
        setModalDisplay((prev)=>prev=true);

        reset();
    }

    return(
        <>
            <form className={formStyle.FormContainer} onSubmit={handleSubmit(onSubmit)}>
                <h1 style={titleFont.style}>Contact Me</h1>

                <span className={formStyle.Formfield}>
                    <label htmlFor='Name' style={karlaFont.style} className={formStyle.Labels}>Enter a name:</label>
                    <input type='text' id='#Name' placeholder='John Doe' {...register('name')} className={formStyle.TextInput}/>
                    <p style={karlaFont.style} role='alert' className={formStyle.Errors}>{errors.name?.message}</p>
                </span>

                <span className={formStyle.Formfield}>
                    <label htmlFor='Email' style={karlaFont.style} className={formStyle.Labels}>Enter an email address:</label>
                    <input type='text' id='#Email' placeholder='JohnDoe@example.com' {...register('email')} className={formStyle.TextInput}/>
                    <p style={karlaFont.style} role='alert' className={formStyle.Errors}>{errors.email?.message}</p>
                </span>

                <span className={formStyle.Formfield}>
                    <label htmlFor='Purpose' style={karlaFont.style} className={formStyle.Labels}>Select purpose of contact:</label>
                    <select id='Purpose' {...register('purpose')} className={formStyle.TextInput}>
                        <option value={'Connect'} style={karlaFont.style}>To connect with me</option>
                        <option value={'Collaborate'} style={karlaFont.style}>To team up with me on a project</option>
                        <option value={'Hire'} style={karlaFont.style}>To hire me</option>
                        <option value={'Contract'} style={karlaFont.style}>To offer me a contract</option>
                        <option value={'Other'} style={karlaFont.style}>Another reason</option>
                    </select>
                </span>


                <span className={formStyle.Formfield}>
                    <label htmlFor='Message' style={karlaFont.style}>Type your message:</label>
                    <textarea id='Message' {...register('message')} rows={20} className={formStyle.Message}/>
                    <p style={karlaFont.style} role='alert' className={formStyle.Errors}>{errors.message?.message}</p>
                </span>

                <button type='submit' className={formStyle.SubmitButton}>Reach Out</button>
            </form>
            {modalDisplay?<Modal/>:null}
        </>
    )
}