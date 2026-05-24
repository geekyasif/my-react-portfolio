import React from 'react'
import About from './about/About'
import Experience from './experience/Experience'
import Education from './education/Education'
import TechSkills from './techSkills/TechSkills'
import Interest from './interest/Interest'
import Language from './language/Language'

function Resume() {
  return (
    <div className="space-y-8">
      <About/>
      <Experience/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Education/>
        <TechSkills/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Language/>
        <Interest/>
      </div>
    </div>
  )
}

export default Resume