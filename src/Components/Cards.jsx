import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { AddtoCartAction } from '../Store/Action/Products';

function CardCmp({product}) {
  const dispatch  = useDispatch()
  const addToCart =()=>{
    dispatch(AddtoCartAction(product));

  }
  
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" className='w-100' height={230}  src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.prices}
        </Card.Text>
        <Button variant="primary" onClick={addToCart}>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCmp;