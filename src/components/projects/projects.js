import React, { Component } from 'react';
import './projects.css'
import Navbar from './../navbar/navbar'
import Footer from './../footer/footer'
import { Row, Carousel,CardPanel,Col } from 'react-materialize'

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <Navbar />
                <Row className="projectscard">
                    <Col s={12} m={6}>
                        <CardPanel className="teal lighten-4 black-text">
                            <h3>Entrepreneurial Summit</h3>
                            <p>
                            Worked with a team of 50 people to organize E summit of IIT Roorkee in collaboration with one of Asia’s largest
                            technical fest Cognizance. Lead a team of 6 people in managing the Website of the E-Summit.<br/>
                            visit at : <a target="_blank" href="https://esummit.iitr.ac.in">esummit.iitr.ac.in</a>

                            </p>
                        </CardPanel>
                    </Col>
                    <Col s={12} m={6}>
                        <CardPanel className="teal lighten-4 black-text">
                            <h3>TEDx IIT Roorkee</h3>
                            <p>
                                Worked with a team of 3 to develop the website of
                                TEDx IIT Roorkee,a global platform which had 400 attendees.<br/>
                                <b>'not hosted currently'.</b>
                            
                                
                            </p>
                        </CardPanel>
                    </Col>
                    <Col s={12} m={6}>
                        <CardPanel className="teal lighten-4 black-text">
                            <h3>IRAYAT</h3>
                            <p>
                               This is an ecommerce website which sells women garments.I made the website using Wordpress.
                               The work of the website is still under progress.<br/>
                               visit at : <a target="_blank" href="http://www.irayat.in">www.irayat.in</a> 
                            </p>
                        </CardPanel>
                    </Col>
                    <Col s={12} m={6}>
                        <CardPanel className="teal lighten-4 black-text">
                            <h3>Water Level Control</h3>
                            <p>This is the project taken under the guidance of Electronics section.
                                In this project,we are aiming to control the level of water in water tanks.
                                For this we are making use of arduino.Moreover we are planning to channelize the water 
                                for the irrigation purpose using our project model based on the temperature and moisture of
                                the location.For this we are making use of temperature and moisture censor.
                                
                            </p>
                        </CardPanel>
                    </Col>
                    <Col s={12} m={6}>
                        <CardPanel className="teal lighten-4 black-text">
                        <h3>Health Wealth Bot</h3>
                        <p>I leading a team of 3 including me,did this project as a submission for CodeFundo Event organised by Microsoft.
                           In this project, we analysed the sentiment of the user on the basis of what he/she writes into the bot and the bot will reply accordingly.
                           It also sets reminder and supported with giphys to make user experience more delightful.
                        </p>
                        </CardPanel>
                    </Col>
                    
                </Row>
                <Footer />
            </div>
        )
    }
}