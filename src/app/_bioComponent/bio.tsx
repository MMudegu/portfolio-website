import bioStyle from './bio.module.css'
import Image from 'next/image'
import avatar from '../../../public/Avatar.jpeg'
import {Markazi_Text,Karla} from 'next/font/google'

const titleFont = Markazi_Text({
    subsets: ['latin'],
    weight:'700',
})

const paragraphFont = Karla({
    subsets: ['latin'],
    weight:'700'
})

export default function Bio(){
    return(
      <div className={bioStyle.bioContainer} id='Bio'>
        <h1 className={titleFont.className}>BIO</h1>
        <Image alt= {`Author's Avatar`} src={avatar} priority className={bioStyle.avatar}/>
        <p className={paragraphFont.className}>
            My name is Marvin; I am a web developer<br/>
            based in Nairobi, Kenya. My main area<br/>
            of focus currently is front-end development.<br/>
            I am well versed with Design in Figma, HTML, <br/>
            CSS, Javascript, Typescript, React and NextJS. <br/>
            I am interested in building great <br/>
             products with great people.
        </p>
      </div>
    )
}