import React, { Component } from 'react';
import './index.css';

import {Button, Icon,Navbar,NavItem,Row,Col,Card,Collapsible,CollapsibleItem} from 'react-materialize';

export default class Content extends Component{
    constructor(props) {
        super(props);
        // this.openpopout = this.openpopout.bind(this);
    }
    // openpopout = () => {
      
    //   var y = document.querySelectorAll('.collapsible.popout > li');
      
    //   y.className += " active";
    //   var x =  document.getElementsByClassName('collapsible-header');
    //   x.className += " active";
      
    // //   document.getElementsByClassName('collapsible-body').style.display = "block";
    // }
    // componentDidMount (){
    //     window.addEventListener('load', this.openpopout);
        
    // }
    render(){
        return(
             <div className="contentmainpage">   
                <Row className="aboutme">
                    
                    <Col s={12} m={12} l={12} className='AboutMe'>
                                    <span className="aboutmehead">ABOUT ME</span>
                    </Col>
                    
                </Row>
                <Row className="popout">
                    <Col l={4} m={4} s={12}> 
                        <Collapsible popout defaultActiveKey={1} accordion>
                            <CollapsibleItem header='EDUCATION' icon='filter_drama'>
                               <h5>Indian Institute of Technology, Roorkee</h5><br/>
                               Since July 2016<br/>
                               Bachelor of Technology<br/>
                               Civil Engineering<br/>
                               Second Year (as of October 2017)<br/>
                               Overall CGPA : 9.113/10.0<br/>
                               <h5>Amity International School,Saket</h5>
                               June 2009 – June 2016<br/>
                               Central Board of Secondary Education (CBSE)<br/>
                               Overall Percentage(Class 12th): 92.8%
                            </CollapsibleItem>
                        </Collapsible>
                    </Col>
                    <Col l={4} m={4} s={12}> 
                        <Collapsible popout defaultActiveKey={2}>
                            <CollapsibleItem header='TECHNICAL STRENGTHS' icon='filter_drama'>
                                <h5>Web Development Tools and Languages</h5>
                                <p className="webdevtools">
                                    Reactjs,Nodejs,HTML,CSS,jQuery,MongoDB,Mongoose,Bootstrap,Wordpress

                                </p>
                                <h5>Programming Languages</h5>
                                <p>
                                    Python,C++,Swift

                                </p>
                                <h5>Software Packages</h5>
                                <p>
                                    Adobe Photoshop<br/>
                                    Quantum GIS<br/>
                                    Microsoft Office<br/>
                                </p>
                            </CollapsibleItem>
                        </Collapsible>
                    </Col>
                    <Col l={4} m={4} s={12}> 
                        <Collapsible popout defaultActiveKey={3}>
                            <CollapsibleItem header='MEMBERSHIPS' icon='filter_drama'>
                                <h5>Entrepreneurship Development Cell(EDC)</h5>
                                <h6>Member : since 2017</h6>
                                <h5>Microsoft Student Partner</h5>
                                <h6>Member : since 2017</h6>
                                <h5>Artificial Intelligence And Electronics Society(ArIES)</h5>
                                <h6>Member : since july,2017</h6>
                                <h5>National Service Scheme(NSS)</h5>
                                <h6>Member : 2016-2017</h6>

                            </CollapsibleItem>
                        </Collapsible>
                    </Col>
                </Row>
                <Row className="popout2">
                    <Col l={4} m={4} s={12}> 
                        <Collapsible popout defaultActiveKey={3}>
                            <CollapsibleItem header='ACHIEVEMENTS' icon='filter_drama'>
                                
                                    <h6>1. Selected for KVPY (Kishore Vaigyanik Protsahan Yojana) Stream-SX in 2015 (Class-XII) organised by Indian institute of Science, Bangalore.(cleared both written and interview round)</h6>
                                    <h6>2. Got selected for National Round of Science Exhibition,organised by CBSE in 2014, under the project "Magnifying Coils".</h6>
                                    <h6>3. Awarded gold medal for the same project in interamity science exhibition in 2014.</h6> 
                                    <h6>4. Awarded silver medal for Manavsthali Maths Olympiad,2015.</h6>
                                                   
                            </CollapsibleItem>
                        </Collapsible>
                    </Col>
                    <Col l={4} m={4} s={12}> 
                        <Collapsible popout defaultActiveKey={3}>
                            <CollapsibleItem header='POSITIONS OF RESPONSIBILITY ' icon='filter_drama'>
                               <h5>Entrepreneurial Summit</h5>
                               <h6>Senior Web Developer : since Jan,2018</h6>
                               <h6><a target="_blank" href="https://esummit.iitr.ac.in">esummit.iitr.ac.in</a></h6>
                               <h5>TEDx IIT Roorkee</h5>
                               <h6>Senior Web Developer : 2017</h6>
                               <h5>IRAYAT- Ecommerce Website</h5>
                               <h6>Senior Web Developer : since jan,2018</h6>
                               <h6><a target="_blank" href="http://www.irayat.in">www.irayat.in</a></h6>
                               
                            </CollapsibleItem>
                        </Collapsible>
                    </Col>
                </Row>
            </div>
        )
    }
}