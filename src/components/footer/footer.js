import React, { Component } from 'react';
import './footer.css'
import {Footer,Icon} from 'react-materialize'
import { SocialIcon } from 'react-social-icons';

export default class Footermain extends Component{
    render(){
        return(
            <Footer copyrights="Copyright &copy; 2018.Ankit Raj."
                moreLinks={
                    <span>
                    
                    <a className="grey-text text-lighten-4 right" href="#!"> <SocialIcon url="https://github.com/Ankitraj007" style={{ height: 25, width: 25 }}/></a>
                    <a className="grey-text text-lighten-4 right" href="#!"> <SocialIcon url="https://twitter.com/ankitraj9953" style={{ height: 25, width: 25 }}/></a>
                    <a className="grey-text text-lighten-4 right" href="#!"> <SocialIcon url="https://www.linkedin.com/in/ankitraj007/" style={{ height: 25, width: 25 }}/></a>
                    <a className="grey-text text-lighten-4 right" href="#!"> <SocialIcon url="https://www.facebook.com/mrankitraj" style={{ height: 25, width: 25 }}/></a>
                    </span>
                }
                links={
                    <ul>
                    <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
                    <li><a className="grey-text text-lighten-3" href="/projects">Projects</a></li>
                    <li><a className="grey-text text-lighten-3" href="/contact">Contact</a></li>
                    
                    </ul>
                }
                className='example'
                >
                    <h5 className="white-text">Address</h5>
                    <p className="grey-text text-lighten-4">Indian Institute of Technology,Roorkee<br/>
                    PIN : 247667
                    </p>
            </Footer>
                        )
    }
}