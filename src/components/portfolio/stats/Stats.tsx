import React from 'react'
import StatsCard from './StatsCard'
import { faBoltLightning, faHeartPulse, faStarHalfAlt, faTrophy } from '@fortawesome/free-solid-svg-icons'
import Heading from '../../Heading'

function Stats() {
  return (
    <div className=''>
        <Heading title='Stats' buttonText=''/>
        <div className='sm:flex sm:flex-col md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap md:justify-between lg:justify-between'>
            <StatsCard icon={faBoltLightning} title="2" subTitle='Longest strak' color="text-blue-500"/>
            <StatsCard icon={faStarHalfAlt} title="1200" subTitle='Experience points' color="text-yellow-400"/>
            <StatsCard icon={faTrophy} title="Novice" subTitle='Current league' color="text-orange-600"/>
            <StatsCard icon={faHeartPulse} title="120" subTitle='karma points' color="text-pink-500"/>
        </div>
    </div>
  )
}

export default Stats