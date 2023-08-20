import projectStyle from './projects.module.css'
import {Markazi_Text} from 'next/font/google'
import ProjectTile from './projectsTile'

const titleFont = Markazi_Text({
    subsets: ['latin'],
    weight:'700',
})

export default function Projects(){
    return(
       <div className={projectStyle.ProjectsContainer} id='Projects'>
            <h1 className={titleFont.className}>PROJECTS</h1>
            <ProjectTile/>
       </div>
    )
}