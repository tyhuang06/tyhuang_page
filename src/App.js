import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { 
  Container,
  Nav,
  Navbar 
} from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'TY Huang',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'Projects', path: '/projects'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'About Me'
      },
      projects: {
        title: 'My Projects'
      },
      contact: {
        title: 'Contact Me'
      }
    }
  }
  
  render() {
    return (
      <Router>
        <Container fluid={true}>
          <div>Hello World</div>
        </Container>
      </Router>
    );
  }
  
}

export default App;
