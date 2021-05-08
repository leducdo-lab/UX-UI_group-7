import React from 'react';
import './../style/Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
      <div>
        <Navbar bg="primary" variant="dark" fixed='top'>
          <Link to="/" style={{'textDecoration': 'none'}}>
            <h1>Pharma DX</h1>
          </Link>
          <Nav className="ml-auto ml-fix" >
              <Nav.Link href="#"><span className='dx-options'>Giới thiệu</span></Nav.Link>
              <Nav.Link href="#"><span className='dx-options'>Liên hệ</span></Nav.Link>
          </Nav>
          <Button variant="light"><a className='dx-auth' href="#/login">Đăng nhập</a></Button>
        </Navbar>
      </div>
    );
}

export default Navigation;
