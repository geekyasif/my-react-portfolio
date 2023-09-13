import React, { useState } from 'react'

function useUser() {
  const [user, setUser] = useState({})

  async function fetchUserDetails() {
    // const res = await fetch(process.env.API_URL)
  }
}

export default useUser