import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div className='p-5'>
            <hr />
            <Row className='mt-3 p-2'>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <img
                        alt=""
                        src="https://i.postimg.cc/t4B7JYH9/playback-icon-7119874-1280.webp"
                        width="20"
                        height="20"
                        className="d-inline-block align-top me-1 mt-1"
                    />{' '}
                    <b className='fs-5 '><span>V</span>ideo <span>U</span>ploader</b>
                    <h5 className='mt-2 p-2'>Designed and Built with all the love in the world by the bootstrap team.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h5>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} className='ps-3'>
                    <h4>Links</h4>
                    <a className='fs-5' style={{ textDecoration: 'none', color: 'red' }} href="">Landing Page</a><br/>
                    <a className='fs-5' style={{ textDecoration: 'none', color: 'red' }} href="">Home</a><br/>
                    <a className='fs-5' style={{ textDecoration: 'none', color: 'red' }} href="">Watch History</a>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <h4>Guides</h4>
                    <h5>react</h5>
                    <h5>react bootstrap</h5>
                    <h5>routing</h5>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <h4 className='text-danger'>Contact Us</h4>
                    <input type='text' className='form-control w-75' placeholder='Enter Email' />
                    <button className='btn btn-danger w-75 mt-3'>Send</button><br/>
                    <i class="fa-brands fa-instagram text-white fa-2x mt-3 ms-3"></i>
                    <i class="fa-brands fa-facebook text-white fa-2x mt-3 ms-3"></i>
                    <i class="fa-brands fa-twitter text-white fa-2x mt-3 ms-3"></i>
                    <i class="fa-brands fa-github text-white fa-2x mt-3 ms-3"></i>
                </Col>
            </Row>
        </div>
    )
}

export default Footer