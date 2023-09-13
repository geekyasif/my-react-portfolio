import React from 'react'
import ProjectCard from './ProjectCard'
import Heading from '../../Heading'

function Projects() {
  return (
    <div>
        <Heading title="Projects" buttonText='Create new projects'/>
        <div className='flex flex-wrap items-center justify-between'>
            <ProjectCard imageUrl='project_image_1.png' title='Next.Js Amazon Clone' skills={["Next.js", "React.js", "Firebase", "Tailwindcss"]} />
            <ProjectCard imageUrl='pizza.png' title='Online Pizza Delivery' skills={["Node" , "React", "Firebase", "Tailwindcss"]} />
            <ProjectCard imageUrl='scaler_task.png' title='Frontend Scaler Task' skills={["Next.js", "React.js", "Firebase", "Tailwindcss"]} />
            <ProjectCard imageUrl='campus_connect.png' title='Campus Connect' skills={["Next.js", "React.js", "Firebase", "Tailwindcss"]} />
            <ProjectCard imageUrl='bca_notes.png' title='GetMyNotes' skills={["Next.js", "React.js", "Firebase", "Tailwindcss"]} />
            <ProjectCard imageUrl='codedamn.png' title='Codedamn Clone' skills={["Next.js", "React.js", "Firebase", "Tailwindcss"]} />
        </div>
    </div>
  )
}

export default Projects