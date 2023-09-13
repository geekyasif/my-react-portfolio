import React, { useState } from 'react'
import Hero from '../components/portfolio/hero/Hero'
import Tabs from '../components/tabs/Tabs'
import Portfolio from '../components/portfolio/Portfolio'
import Resume from '../components/resume/Resume'

function Home() {
  const [activeTab, setActiveTab] = useState<string>("portfolio")

  const handleActiveTab = () => {
   console.log("working")
  }
  return (
    <div className='container mx-auto my-8 p-2'>
        <Hero/>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
       {
        activeTab === "portfolio" ? <Portfolio/> : <Resume/>
       }
    </div>
  )
}

export default Home