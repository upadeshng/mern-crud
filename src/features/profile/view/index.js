import React, { Component } from 'react';
// import {Router, Route, Switch} from 'react-router'

import {BrowserRouter as Router, Link} from 'react-router-dom'

import {getProfile} from '../action'
import {connect} from 'react-redux'
import Detail from './detail'
import {Row, Col} from 'react-bootstrap'

class Profile extends Component {

    componentDidMount() {
        this.props.getProfile();
      }

    
    render() {

        const {profileData} = this.props;

        console.log('profileData',profileData)

        if(!profileData.user){
            return (
                <div>Loading..</div>
            )
        }

        return (
            <div>

                <Row>
                    <Col md="3">
                        <Detail />
                    </Col>

                    <Col md="9">
                       
                    </Col>
                </Row>
            
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        profileData: state.profileReducer.data,
    };
  };
export default connect(mapStateToProps, {getProfile})(Profile);
