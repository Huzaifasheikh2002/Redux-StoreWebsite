import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  return (<>
  <Navbar bg="dark" variant='dark'>
  <Container>
    <Navbar.Brand href="#home">H-Store</Navbar.Brand>

    <div className='text-white d-flex gap-2'>
    <h4 className='text-white'>Add to Cart</h4>
    <h4 className='text-white'>0</h4>
    </div>
    </Container>
  </Navbar>
  </>);
}

export default App;
