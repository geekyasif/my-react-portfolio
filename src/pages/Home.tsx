import React, { useEffect } from "react";
import Hero from "../components/portfolio/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
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
    <div className="max-w-7xl mx-auto pb-8 pt-6 p-2">
      <Hero />
      <Portfolio />
    </div>
  );
}

export default Home;
