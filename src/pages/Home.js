import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import View from '../components/View'
import Add from '../components/Add'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'

function Home() {

  //state for state lifting
  const [addUpdate,setAddUpdate]=useState({})

  return (
    <div className='mt-5'>
      <Row>
        <Col>
          <h2 className='ms-5 ps-5 mb-4 fs-4'>
            <span>S</span>tart <span>U</span>ploading <span>V</span>ideos <span>F</span>or <span>F</span>ree
          </h2>
          <div className='m-5 fs-3 ps-5'>
            <Link to={'watch-history'} style={{textDecoration: 'none'}}>
            <a className='text-warning fs-4' style={{ textDecoration: 'none', fontFamily: 'Satisfy, cursive' }} href="">
              <i class="fa-solid fa-clock fa-spin text-light mt-2"></i> View Watch History
            </a>
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur facilis asperiores dignissimos alias amet reiciendis architecto odit ab.</p>
          </div>
        </Col>
        <Col className='text-center'>
          <img style={{ width: '300px', height: '300px' }} src="https://i.postimg.cc/J06wXHRC/png-transparent" alt="" />
        </Col>
      </Row>

      <Row className='ps-5'>
        <Col lg={1}>
          <Add update={setAddUpdate}></Add>
        </Col>

        <Col lg={7}>
          <View updatedState={addUpdate}></View>
        </Col>

        <Col lg={4}>
          <Categories></Categories>
        </Col>

      </Row>
    </div>
  )
}

export default Home