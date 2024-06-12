import React from 'react'
import '../components/Header.css'

function Header() {
  return (
    <div className='header'>
      <div className="title"><h1>GITHUB FINDER</h1></div>
      <div className="by">By <a href="https://github.com/KATAMII">Katamii</a></div>
      <div className="search">
        <form >
            <input type="text" placeholder='enter a UserName' />
            <button type='button'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Header
