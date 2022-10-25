import React, { useEffect, useState } from 'react'
import NavbarCmp from '../Components/Navbar'
import axios from "axios"
import { Col, Container, Row } from 'react-bootstrap'
import CardCmp from '../Components/Cards'

const Website = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response=>{
      console.log(response,"response");
      setData(response.data)
    }) 
    .catch(error=>{
      console.log(error,"error");
    })
  })
  return (<>
    <NavbarCmp/>
    <Container className='mt-5'>
    <Row>
      {data.map((product)=>{
        return( 
      <Col lg="3" key={product.id}>
        <CardCmp product={product}/>
      </Col>
      );
      })}
        
    </Row>
    </Container>
</>)
}

export default Website