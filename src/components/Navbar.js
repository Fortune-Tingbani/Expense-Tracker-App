import React, { useContext} from 'react'

import {AuthContext} from '../context/authContext'
import { FaSignOutAlt} from "react-icons/fa"

function Navbar() {
  
    const { authLogout} = useContext(AuthContext)

    // useEffect(() => {
    //     if (!user) {
    //         navigate("/login");
    //     }
    // }, [user]);

  return (
    
    <div className='fort'>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div class="container-fluid">
    <a class="navbar-brand" href="/">logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/home">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" type="button"
            onClick={() => authLogout()}
        href="/"><FaSignOutAlt/></a>
    </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar



