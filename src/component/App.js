import React from 'react';
import { Switch , withRouter , Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import LoginComponent from './LoginComponent';
class App extends React.Component{
    render(){
        return(
            <Switch>
                <Route path='/' component={HomeComponent} exact />
                <Route path='/login' component={LoginComponent} exact />
            </Switch>
        )
    }
}
const mapStateToProps = (state) => {
    const {
        home
    } = state;
    return {
        home
    }
}
export default withRouter(connect(mapStateToProps)(App));