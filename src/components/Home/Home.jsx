import './Home.scss';
import React from 'react'
import {FaSearch} from 'react-icons/fa'
function Home() {
  return (
    <div className='home'>
        <div className='search'>
        <input type='text' placeholder='Search' />
        <button className='buttonIcon'><FaSearch/></button>
        <button>Hello</button>
        <p>hel</p>
        </div>
    </div>
  )
}

export default Home