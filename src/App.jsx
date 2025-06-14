import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Navbar"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from "react-router-dom";



const App =()=>  {
 
  return (
    <>
   
    <Nav/>
    <Header/>
    <br />
    <br />
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
        <Button variant="primary" style={{backgroundColor:'black'}} >Cart</Button>
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
        <Button variant="primary" style={{backgroundColor:'black'}}>Cart</Button>
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
        <Button variant="primary" style={{backgroundColor:'black'}}>Cart</Button>
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
        <Button variant="primary" style={{backgroundColor:'black'}}>Cart</Button>
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
        <Button variant="primary" style={{backgroundColor:'black'}}>Cart</Button>
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
        <Button variant="primary" style={{backgroundColor:'black'}}>Cart</Button>
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
        <Button variant="primary" style={{backgroundColor:'black'}}>Cart</Button>
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
        <Button variant="primary"  style={{backgroundColor:'black'}}>Cart</Button>
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
        <Button variant="primary" style={{backgroundColor:'black'}}>Cart</Button>
      </Card.Body>
    </Card>
    <br />
    </div>
  
</div>
<br /><br /><br /><br />
       <Footer/>
   
    </>
  )
}

export default App
