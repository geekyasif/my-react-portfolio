import React from 'react'
import Heading from '../Heading'
import SkillTag from '../../SkillTag'

const langauges = ["Hindi", "English"]

function Language() {
  return (
    <div>
    <Heading title="Languages" position='' />
    <div className='flex flex-wrap'>
    {
        langauges.map((item, i) => (
            <SkillTag title={item} key={i} bgColor='bg-gray-50 text-xl'/>
        ))
    }
    </div>
</div>
  )
}

export default Language