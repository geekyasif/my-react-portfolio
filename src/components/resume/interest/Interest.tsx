import React from 'react'
import Heading from '../Heading'
import SkillTag from '../../SkillTag'

const interests = ["Semantics", "Udemy", "Full Stack", "Data Structure and Algorithms", "Web Development", "Android Developemnt"]


function Interest() {
  return (
    <div className='my-6'>
        <Heading title="Interests" position='' />
        <div className='flex flex-wrap'>
        {
            interests.map((item, i) => (
                <SkillTag title={item} key={i} bgColor='bg-gray-50 text-xl'/>
            ))
        }
        </div>
    </div>
  )
}

export default Interest