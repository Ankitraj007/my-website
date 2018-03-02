import React, { Component } from 'react';
import './contact.css'
import Navbar from './../navbar/navbar'
import Footer from './../footer/footer'
import {Row,Col,Card} from 'react-materialize'

export default class Contact extends Component{
    render(){
        return(
            <div className="contacts">
                <Navbar/>
                    <Row className="contactcard">
                        <Col m={3} s={1}></Col>
                            <Col m={6} s={10} className="contactcard">
                                <Card className='blue-grey darken-1' textClassName='white-text' title='CONTACT ME' actions={[<a href='/'>visit me</a>]}>
                                Ankit Raj<br/>
                                Bachelor of Technology<br/>
                                Civil Engineering<br/>
                                Indian Institute of Technology , Roorkee <br/>
                                Phone : &nbsp; <a href="tel:9999227226" className="phonenumbercard">+91 9999227226</a><br/>
                                E-Mail : &nbsp; <a href="mailto:mrankitraj@gmail.com" className="emailcard">mrankitraj@gmail.com</a><br/>
                                
                                </Card>
                            </Col>
                        <Col m={3} s={1}></Col>
                    </Row>
                <Footer/>
            </div>
        )
    }
}