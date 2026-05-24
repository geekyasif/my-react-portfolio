import React from 'react'
import Heading from '../Heading'
import SkillTag from '../../SkillTag'

const langauges = ["Hindi", "English"]

function Language() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <Heading title="Languages" position='' />
      <div className='flex flex-wrap gap-2'>
        {langauges.map((item, i) => (
          <SkillTag title={item} key={i} bgColor='bg-gray-50'/>
        ))}
      </div>
    </div>
  )
}

export default Language
