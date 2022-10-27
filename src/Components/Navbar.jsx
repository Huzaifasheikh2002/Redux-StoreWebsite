import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const NavbarCmp = () => {
// Counter Section
  const selector = useSelector((state)=>state.addCounterReducer);
  // Counter Section

  return (


<Navbar bg="dark" variant='dark'>
<Container>
  <Navbar.Brand href="#home">{selector?.name}</Navbar.Brand>

  <div className='text-white d-flex gap-2'>
  <h4 className='text-white'>Add to Cart</h4>
  <h4 className='text-white'>{0}</h4>

  </div>
  </Container>
</Navbar>
  )
}

export default NavbarCmp;
