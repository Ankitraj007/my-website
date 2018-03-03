import React, { Component } from 'react';
import { Route, Switch,HashRouter } from 'react-router-dom'
import Indexmain from './index'
import Projects from './projects/projects'
import Contact from './contact/contact'

export default class Main extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Indexmain} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </HashRouter>
        )
    }
}