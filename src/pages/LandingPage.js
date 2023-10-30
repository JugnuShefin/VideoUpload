import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <Container>
                <Row className='mt-4 ms-5 ps-5'>
                    <Col lg={6}>
                        <div className='mt-4'>
                            <h1 className='fs-3'><span>V</span>ideo <span>U</span>ploader</h1>
                            <p className='fs-5 mt-4 p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis doloribus asperiores facere a quam cupiditate placeat rerum eum ipsum officia consectetur deleniti natus, rem dolor exercitationem iure? Tempora, consectetur animi.</p>
                            <Link to={'/home'}>
                                <Button id='b1' className='btn ms-3 mb-5'><b>Get Started</b><i class="fa-brands ms-3 fa-google-play fa-fade"></i></Button>
                            </Link>                       
                         </div>
                    </Col>
                    <Col>
                        <img className='w-100 ms-5 mt-2 ps-5' style={{ width: '100%', height: '270px' }} src="https://i.postimg.cc/5y1VR95T/vidanim1.gif" alt="" />
                    </Col>
                    <Col>
                        <img className='w-100' scr="https://i.postimg.cc/5y1VR95T/vidanim1.gif" alt='' />
                    </Col>
                </Row>
                <hr />

                <Row className='mt-4 mb-5 py-5 ps-5'>
                    <h1 className='mb-5 text-center fs-3'><span>Features</span></h1>
                    <Col>
                        <Card className='bg-black border border-dark text-dark ms-2' style={{ width: '85%', height: '450px' }}>
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://i.postimg.cc/SKwp9yt2/animvidsub.gif" />
                            <Card.Body className='p-3 text-center'>
                                <Card.Title><h3 className='mb-3 fs-5'>Managing Videos</h3></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error architecto obcaecati possimus officiis dolor sequi suscipit sapiente.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='bg-black border border-dark text-dark ms-1' style={{ width: '85%', height: '450px' }}>
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://i.postimg.cc/QxHgVh1Z/load.gif" />
                            <Card.Body className='text-center'>
                                <Card.Title><h3 className='mb-3 fs-5'>Categorise Videos</h3></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laborum consectetur
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='bg-black border border-dark text-dark' style={{ width: '85%', height: '450px' }}>
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://i.postimg.cc/V62fRqGR/mus.gif" />
                            <Card.Body className='text-center'>
                                <Card.Title><h3 className='mb-3 fs-5'>Watch History</h3></Card.Title>
                                <Card.Text className=''>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci optio similique odio? Fuga, recusandae debitis?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage