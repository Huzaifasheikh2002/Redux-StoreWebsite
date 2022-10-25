import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const NavbarCmp = () => {
  return (

<Navbar bg="dark" variant='dark'>
<Container>
  <Navbar.Brand href="#home">H-Store</Navbar.Brand>

  <div className='text-white d-flex gap-2'>
  <h4 className='text-white'>Add to Cart</h4>
  <h4 className='text-white'>{0}</h4>
  <button className="btn btn-primary mx-2"> +</button>
  <button className="btn btn-danger">-</button>

  </div>
  </Container>
</Navbar>
  )
}

export default NavbarCmp;
