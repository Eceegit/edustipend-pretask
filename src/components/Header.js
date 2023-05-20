import React from 'react'


function Header() {
  return (
    <div className='header-box'>
        <div className='input-box'>
            <input type="text"></input>
            <span className='input-span'>Contact us</span>
            <button className='input-btn'>
                Signup
            </button>
        </div>
    </div>
  )
}

export default Header