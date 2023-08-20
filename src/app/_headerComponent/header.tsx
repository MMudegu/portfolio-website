import headerStyle from './header.module.css'
import {Karla} from 'next/font/google'
import Link from 'next/link';
import {FaGithub,FaLinkedin,FaDiscord} from 'react-icons/fa6'

const karlaFont = Karla({
    subsets:['latin']
});

export default function Header(){
    return(
    <header className={headerStyle.headerContainer}>
        <div className={headerStyle.iconContainer}>
            <a href={'https://github.com/MMudegu'}><span style={karlaFont.style} className={headerStyle.icon}><FaGithub className={headerStyle.FA_Icon}/>Github</span></a>
            <a href={'https://discord.gg/hmhBUneK'}><span style={karlaFont.style} className={headerStyle.icon}><FaDiscord className={headerStyle.FA_Icon}/>Discord</span></a>
            <a href={'https://www.linkedin.com/in/marvin-mudegu-114bbb106/'}><span style={karlaFont.style} className={headerStyle.icon}><FaLinkedin className={headerStyle.FA_Icon}/>LinkedIn</span></a>
        </div>
        <nav className={headerStyle.navLinksContainer}>
            <Link style={karlaFont.style} className={headerStyle.navLinks} href={'#Bio'}>Bio</Link>
            <Link style={karlaFont.style} className={headerStyle.navLinks} href={'#Projects'}>Projects</Link>
            <Link style={karlaFont.style} className={headerStyle.navLinks} href={'#ContactMe'}>Contact Me</Link>
        </nav>
    </header>
    )
}