import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class LoginComponent extends React.Component{
    render(){
        return(
            <><Link to="/">Home</Link>
            <div>Login Page</div></>
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
export default connect(mapStateToProps,null)(LoginComponent);