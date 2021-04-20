import React, { Component } from "react"
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../actions'
import Landing from './Landing'

const dashbord = () => {return <h2>dashbord</h2> }
const surveyNew = () => {<h2>surveyNew</h2> }


class App extends Component{
    componentDidMount(){
        this.props.fetchUser();

    }
render(){
    return(
    <div>
        <BrowserRouter>

        <div className="container">
        <Header/>
        <Route  exact path='/' component = {Landing}/>
        <Route  exact path='/surveys' component = {dashbord}/>
        <Route path='/surveys/new' component = {surveyNew}/>
        </div>
        
        </BrowserRouter> 
    </div>
    );
};
}

export default connect(null, actions)(App);