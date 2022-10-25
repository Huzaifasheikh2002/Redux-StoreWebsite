import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  
  const selector = useSelector(state => state.addCounterReducer);
  console.log(selector,"selector");   

  return (<>
  <Navbar bg="dark" variant='dark'>
  <Container>
    <Navbar.Brand href="#home">H-Store</Navbar.Brand>

    <div className='text-white d-flex gap-2'>
    <h4 className='text-white'>Add to Cart</h4>
    <h4 className='text-white'>{selector.globalCounter}</h4>
    </div>
    </Container>
  </Navbar>
  </>);
}

export default App;
