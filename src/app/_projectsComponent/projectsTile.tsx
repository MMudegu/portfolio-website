'use client'
import {listOfProjects} from '../../../public/listOfProjects'
import projectsTileStyle from './projectsTile.module.css'
import Image from 'next/image'
import { Karla } from 'next/font/google'
import { useState } from 'react'

const textFont = Karla({
    subsets:['latin']
})

export default function ProjectTile(){

    type disableBtnType = {
        prev:boolean,
        next:boolean
    }
    const [count,setCount] = useState<number>(0);
    const [disableBtn,setDisableButton] = useState<disableBtnType>({prev:false,next:false});

    const handleClickPrev = ()=>{
        if(count === 0){
            setDisableButton({...disableBtn,prev:true});
        }
        else
        {
            setDisableButton({...disableBtn,prev:false});
            setDisableButton({...disableBtn,next:false});
            setCount((Previous:number):number=>Previous-1);
        }
    }

    const handleClickNext = ()=>{
        if(count === 9){
            setDisableButton({...disableBtn,next:true});
        }
        else
        {
            setDisableButton({...disableBtn,next:false});
            setDisableButton({...disableBtn,prev:false});
            setCount((Previous:number):number=>Previous+1);
        }
    }

    return(
        <div className={projectsTileStyle.ProjectsTileContainer}>
            {listOfProjects.map((item,index)=>{
                return (
                    <div key={index}>
                        <h2 style={textFont.style}>{item.title}</h2>
                        <span className={projectsTileStyle.ImageContainer}>
                            <h3 style={textFont.style} className={projectsTileStyle.ImageTitle}>{item.imageTitle[count]}</h3>
                            <button className={projectsTileStyle.ImageButtonPrev}  onClick={handleClickPrev} disabled={disableBtn.prev}>{'<'}</button>
                            <Image src={item.image[count]} alt='Sample snippets of the project' className={projectsTileStyle.ProjectImage}/>
                            <button className={projectsTileStyle.ImageButtonNext} onClick={handleClickNext} disabled={disableBtn.next}>{'>'}</button>
                        </span>
                        <p className={textFont.className}><strong>Technology: </strong>{item.technology}</p>
                        <p className={textFont.className}><strong>Description: </strong>{item.description}</p>
                        <p className={textFont.className}><strong>Github: </strong><a href={item.url}>Little Lemon</a></p>
                    </div>
                )
            })}
        </div>
    )
}