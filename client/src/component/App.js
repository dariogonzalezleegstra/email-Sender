import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//To be able to call action creators, we'll use connect
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    //Class based components must have a render() method
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div className="container">
                            <Route exact path="/" component={Landing}/>
                            <Route exact path="/surveys" component={Dashboard}/>
                            <Route path="/surveys/new" component={SurveyNew}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

// null es donde iria mapStateToProps pero en este caso
// no la necesitamos
// actions va a ser asignado a App y van a poder
// usarse como props
export default connect(null, actions)(App);
