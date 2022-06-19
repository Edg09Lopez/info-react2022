import React, { Component, Fragment } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
        
        };

    }

    
    render() {
        console.log(this.state);
        return (
            <Fragment>
                <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            </Fragment>
        )
    }
}
export default Home;