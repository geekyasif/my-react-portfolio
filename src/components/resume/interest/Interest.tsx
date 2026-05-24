import React from 'react'
import Heading from '../Heading'
import SkillTag from '../../SkillTag'

const interests = ["Semantics", "Udemy", "Full Stack", "Data Structure and Algorithms", "Web Development", "Android Developemnt"]

function Interest() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <Heading title="Interests" position='' />
      <div className='flex flex-wrap gap-2'>
        {interests.map((item, i) => (
          <SkillTag title={item} key={i} bgColor='bg-gray-50'/>
        ))}
      </div>
    </div>
  )
}

export default Interest
