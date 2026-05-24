import React, { useEffect } from "react";
import Hero from "../components/portfolio/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Resume from "../components/resume/Resume";
import { useUser } from "../context/UserProvider";
import { fetchProfile } from "../services";

function Home() {
  const { setUser } = useUser();

  async function fetchUserData() {
    const data: any = await fetchProfile();
    setUser(data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto pb-8 pt-6 px-2 md:px-4 lg:px-6">
      <Hero />
      <div className="mt-8">
        <Resume />
      </div>
      <Portfolio />
    </div>
  );
}

export default Home;
