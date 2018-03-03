import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';
import Navbartop from './navbar/navbar'
import Content from './content/index'
import Footermain from './footer/footer'

export default class Indexmain extends Component{

    render() {
        return (
            <div>
                <Navbartop/>
                <Content/>
                <Footermain/>
            </div>
        )
    }
}