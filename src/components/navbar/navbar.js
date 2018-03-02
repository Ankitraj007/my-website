import React, { Component } from 'react';
import './navbar.css'
import me from './../../img/ankit.png'
import {Button, Icon,Navbar,NavItem,Row,Col} from 'react-materialize';

export default class Navbartop extends Component{

    render() {
        return (
            <div className="navbartopmainpage">
                <Row>
                    <Col s={12} m={12} l={12} className="mymagecontainer">
                                    <img className="myimage" src={me}/>
                    </Col>
                    <Col s={12} className='grid-example'>
                        <p className="navbar-text">ANKIT RAJ</p>
                    </Col>
                </Row>
                <Navbar className="navbartop">
                    <NavItem href='/'>HOME</NavItem>
                    <NavItem href='/projects'>PROJECTS</NavItem>
                    <NavItem href="/contact">CONTACT</NavItem>
                </Navbar>
            </div>
            
        )
    }
}