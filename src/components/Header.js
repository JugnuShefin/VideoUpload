import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar className="bg-light me-1" style={{ height: '65px' }}>
                <Container>
                    <Link to={"/"} style={{ textDecoration: 'none' }}>
                        <Navbar.Brand>
                            <img
                                alt=""
                                src="https://i.postimg.cc/t4B7JYH9/playback-icon-7119874-1280.webp"
                                width="30"
                                height="30"
                                className="d-inline-block align-top me-1 mt-3"
                            />{' '}
                            <b className='fs-2 text-black me-5'><span>V</span>ideo <span>U</span>ploader</b>
                        </Navbar.Brand>
                    </Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header