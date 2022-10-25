import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCmp({product}) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" className='w-100' height={230}  src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.prices}
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCmp;