
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


const Home=()=>{
   const navigate = useNavigate();
   const handleCartClick = (item) => {
    navigate('/cart', {
      state: { item }
    });
  };
return(
<>

  <Nav/>
  <Header/>
<br /><br />
    <div className="carddiv">


      <div className="one">
<Card style={{ width: '25rem', backgroundColor: 'black' }}>
      <Card.Img variant="top" src="src/images/img1.jpeg" style={{height:'500px'}} />
      <Card.Body>
        <Card.Title style={{color: ' #ff6f61' }}>Card Title</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'black'}}  onClick={() => handleCartClick({
    img: 'src/images/img1.jpeg',
    title: 'Card Title',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  })} >Add to Cart</Button>
      </Card.Body>
    </Card>
    <br />
    
    <Card style={{ width: '25rem', backgroundColor: 'black' }}>
      <Card.Img variant="top" src="src/images/img2.jpeg" style={{height:'500px'}} />
      <Card.Body>
        <Card.Title style={{color: ' #ff6f61'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'black'}}   onClick={() => handleCartClick({
                img: "src/images/img2.jpeg",
                title: "Stylish Jacket",
                description: "A premium black jacket for winters."
              })}  >Add to Cart</Button>
      </Card.Body>
    </Card>
    <br />
    <Card style={{ width: '25rem' , backgroundColor: 'black' }}>
      <Card.Img variant="top" src="src/images/img3.jpeg" style={{height:'500px'}} />
      <Card.Body>
        <Card.Title style={{color: ' #ff6f61'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'black'}}   onClick={() => handleCartClick({
                img: "src/images/img3.jpeg",
                title: "Stylish Jacket",
                description: "A premium black jacket for winters."
              })}  >Add to Cart</Button>
      </Card.Body>
    </Card>
    <br />
    </div>

<br />

    <div className="two">
    <Card style={{ width: '25rem' , backgroundColor: 'black' }}>
      <Card.Img variant="top" src="src/images/img4.jpg" style={{height:'500px'}} />
      <Card.Body>
        <Card.Title style={{color: ' #ff6f61'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'black'}}  onClick={() => handleCartClick({
                img: "src/images/img4.jpg",
                title: "Stylish Jacket",
                description: "A premium black jacket for winters."
              })}  >Add to Cart</Button>
      </Card.Body>
    </Card>
    <br />
    <Card style={{ width: '25rem' , backgroundColor: 'black'}}>
      <Card.Img variant="top" src="src/images/img5.jpg" style={{height:'500px'}} />
      <Card.Body>
        <Card.Title style={{color: ' #ff6f61'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'black'}}   onClick={() => handleCartClick({
                img: "src/images/img5.jpg",
                title: "Stylish Jacket",
                description: "A premium black jacket for winters."
              })}  >Add to Cart</Button>
      </Card.Body>
    </Card>
    <br />
    <Card style={{ width: '25rem', backgroundColor: 'black' }}>
      <Card.Img variant="top" src="src/images/img6.jpeg"  style={{height:'500px'}} />
      <Card.Body>
        <Card.Title style={{color: ' #ff6f61'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'black'}}   onClick={() => handleCartClick({
                img: "src/images/img6.jpeg",
                title: "Stylish Jacket",
                description: "A premium black jacket for winters."
              })}  >Add to Cart</Button>
      </Card.Body>
    </Card>
    <br />
    </div>
<br />
    <div className="three">
    <Card style={{ width: '25rem', backgroundColor: 'black' }}>
      <Card.Img variant="top" src="src/images/img7.jpeg" style={{height:'500px'}}/>
      <Card.Body>
        <Card.Title style={{color: ' #ff6f61'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'black'}}  onClick={() => handleCartClick({
                img: "src/images/img7.jpeg",
                title: "Stylish Jacket",
                description: "A premium black jacket for winters."
              })}  >Add to Cart</Button>
      </Card.Body>
    </Card>
    <br />
    <Card style={{ width: '25rem' , backgroundColor: 'black' }}>
      <Card.Img variant="top" src="src/images/img8.jpeg" style={{height:'500px'}} />
      <Card.Body>
        <Card.Title style={{color: ' #ff6f61'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"  style={{backgroundColor:'black'}}   onClick={() => handleCartClick({
                img: "src/images/img8.jpeg",
                title: "Stylish Jacket",
                description: "A premium black jacket for winters."
              })} >Add to Cart</Button>
      </Card.Body>
    </Card>
    <br />
    <Card style={{ width: '25rem' , backgroundColor: 'black'}}>
      <Card.Img variant="top" src="src/images/img9.jpeg" style={{height:'500px'}} />
      <Card.Body>
        <Card.Title style={{color: ' #ff6f61'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'black'}}   onClick={() => handleCartClick({
                img: "src/images/img9.jpeg",
                title: "Stylish Jacket",
                description: "A premium black jacket for winters."
              })} >Add toCart</Button>
      </Card.Body>
    </Card>
    <br />
    </div>
  
</div>
<br /><br />
       <Footer/>
</>
)
}
export default Home;