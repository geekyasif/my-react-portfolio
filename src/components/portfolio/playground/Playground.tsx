import React from 'react'
import Heading from '../../Heading'
import PlaygroundCard from './PlaygroundCard'

function Playground() {
  return (
    <div>
        <Heading title='Playgrounds' buttonText='Create new playground' />
        <div className='flex justify-between flex-wrap'>
            <PlaygroundCard title="Carousel Desing and Paralex Effect" skill="HTML/CSS" time="31" imageUrl="express.png"/>
            <PlaygroundCard title="Portofio desinging" skill="React.Js" time="20" imageUrl="react.png"/>
            <PlaygroundCard title="Ecom practice" skill="Node/Express" time="35" imageUrl="node.png"/>
            <PlaygroundCard title="Learning NoSql" skill="MongoDb" time="48" imageUrl="mongo.png"/>
        </div>
    </div>
  )
}

export default Playground