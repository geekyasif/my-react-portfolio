import React from 'react'
import About from './about/About'
import Experience from './experience/Experience'
import Education from './education/Education'
import TechSkills from './techSkills/TechSkills'
import Interest from './interest/Interest'
import Language from './language/Language'

function Resume() {
  return (
    <div>
        <About/>
        <Experience/>
        <Education/>
        <TechSkills/>
        <Interest/>
        <Language/>
    </div>
  )
}

export default Resume