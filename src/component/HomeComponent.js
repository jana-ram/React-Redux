import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class HomeComponent extends React.Component{
    render(){
        return(
            <>
            <Link to="/login">Login</Link>
            <div>Home Page</div></>
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
export default connect(mapStateToProps,null)(HomeComponent);