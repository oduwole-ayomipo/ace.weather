import React from 'react'
import SearchBar from './SearchBar'
import Logo from './Logo'

function TopNav() {
  return (
    <div className='Top-nav flex flex-col justify-center'>
        <Logo />
        <SearchBar />
    </div>
  )
}

export default TopNav