import React, { Component } from 'react';
// import {Router, Route, Switch} from 'react-router'
import {isLoggedIn, loggedInUser, setSessionPharmacy} from '../../../common'

import {BrowserRouter as Router, Link} from 'react-router-dom'

import {history} from '../../../_helpers/history'
import {getProfile} from '../action'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import logo from '../../../assets/img/pharm.png'

class PharmacyList extends Component {

    componentDidMount() {

        var logged_in_user = loggedInUser();
        this.props.getProfile(logged_in_user.id);
      }


    render() {

        const {profileData} = this.props;


        if(!profileData.user){
            return (
                <div>Loading..</div>
            )
        }
        

        return (
            <div style={{background: '#f0f0f7', padding: '10px 20px', marginTop: '15px', minHeight: '215px'}}>

                <h3 className="text-left" style={{padding: '5px 0px 10px'}}><b>Welcome!!</b></h3>

                <Row>

                    <Col md="12">

                       
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
export default connect(mapStateToProps, {getProfile})(PharmacyList);
