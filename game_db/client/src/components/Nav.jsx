// import { useState } from 'react';
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <header>
      <nav className='d-flex justify-content-around align-items-center'>
      <Link to={'/'} style={{textDecoration: 'none', color: 'ghostwhite'}}><h1>IGDb</h1></Link>
        <div className='d-flex justify-content-around w-25'>
          <Link to={'/'} style={{color: 'ghostwhite'}}>Home</Link>
          <Link to={'/gameForm'} style={{color: 'ghostwhite'}}>Add Game</Link>
          <Link to={'/'} style={{color: 'ghostwhite'}}>About</Link>
        </div>
      </nav>
      <div style={{ height: '5px', borderBottom: '2px solid white' }}></div>
    </header>
  )
}

export default Nav;