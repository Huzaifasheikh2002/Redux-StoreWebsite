import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AddCounterAction, MinusCounterAction } from '../Store/Action/Counter';


const Home = () => {
const dispatch =useDispatch();

    const selector = useSelector(state => state.addCounterReducer);
console.log(selector,"selector");   

const addCounter=()=>{
    dispatch(AddCounterAction());
}

const minusCounter=()=>{
    dispatch(MinusCounterAction());
}

return (<>
<Navbar bg="dark" variant='dark'>
<Container>
  <Navbar.Brand href="#home">H-Store</Navbar.Brand>

  <div className='text-white d-flex gap-2'>
  <h4 className='text-white'>Add to Cart</h4>
  <h4 className='text-white'>{selector.globalCounter}</h4>
  <button onClick={addCounter} className="btn btn-primary mx-2"> +</button>
  <button onClick={minusCounter} className="btn btn-danger">-</button>

  </div>
  </Container>
</Navbar>

</>)}
export default Home