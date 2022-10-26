import React, { useEffect, useState } from 'react'
import NavbarCmp from '../Components/Navbar'
import axios from "axios"
import { Col, Container, Row } from 'react-bootstrap'
import CardCmp from '../Components/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAction } from './Action/Products'



const Website = () => {

  // const [data,setData] =useState([])
  const dispatch = useDispatch();
  const {data,dataLoading} =useSelector((state)=>state.GetProductReducer);
  // console.log(selector,"selector");

  useEffect (()=> {
     dispatch(getProductAction())
  },[]);

  console.log("data",data);
  return (<>
    <NavbarCmp/>
   { dataLoading ? <h1>Loading...</h1>  :
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
    </Container>}
</>)
}

export default Website