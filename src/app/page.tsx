import Bio from './_bioComponent/bio'
import Projects from './_projectsComponent/projects'
import ContactForm from './_contactComponent/contactForm'
import ModalDisplayContextProvider from './_Context/ModalDisplayContext'

export default function Page(){
    return(
       <main>
        <Bio/>
        <Projects/>
        <ModalDisplayContextProvider><ContactForm/></ModalDisplayContextProvider>
       </main>
    )
}