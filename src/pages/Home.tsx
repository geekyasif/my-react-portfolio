import React, { useEffect, useState } from "react";
import Hero from "../components/portfolio/hero/Hero";
import Tabs from "../components/tabs/Tabs";
import Portfolio from "../components/portfolio/Portfolio";
import Resume from "../components/resume/Resume";
import { useUser } from "../context/UserProvider";

function Home() {
  const {setUser} = useUser()
  const [activeTab, setActiveTab] = useState<string>("portfolio");

  async function fetchUserData(){
    const res = await fetch("https://raw.githubusercontent.com/geekyasif/my-react-portfolio/main/src/utils/geekyasif.json")
    const _data = await res.json()
    setUser(_data)
  }

  useEffect(() => {
      fetchUserData()
  },[])


  return (
    <div className="container mx-auto my-8 p-2">
      <Hero />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "portfolio" ? <Portfolio /> : <Resume />}
    </div>
  );
}

export default Home;
