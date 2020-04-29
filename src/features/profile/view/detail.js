import React, { Component } from 'react';
// import {Router, Route, Switch} from 'react-router'
import {isLoggedIn, loggedInUser, setSessionPharmacy} from '../../../common'

import {BrowserRouter as Router, Link} from 'react-router-dom'

// import {history} from '../../../_helpers/history'
import {getProfile} from '../action'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import logo from '../../../assets/img/user.png'


class Detail extends Component {

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
        
        return (<>
            <div style={{background: '#f0f0f7', padding: '10px', marginTop: '15px'}}>

                <div className="text-center">
                <img style={{width: '145px'}} alt="" src={logo} />
                </div>
                <h3 className="text-center" style={{padding: '5px 0px 45px'}}><b>{profileData.user.name}</b></h3>

                <Row style={{borderBottom: '1px solid #e4e4e4', margin: '-10px', paddingBottom: '10px'}}>
                    <Col md="3">Username: </Col>
                    <Col md="9" className="text-right">{profileData.user.username}</Col>
                </Row>

                <Row style={{borderBottom: '1px solid #e4e4e4', margin: '20px -10px -10px', paddingBottom: '10px'}}>
                    <Col md="3">Address: </Col>
                    <Col md="9" className="text-right">{profileData.user.address}</Col>
                </Row>

                <Row style={{borderBottom: '1px solid #e4e4e4', margin: '20px -10px -10px', paddingBottom: '10px'}}>
                    <Col md="3">Email: </Col>
                    <Col md="9" className="text-right">{profileData.user.email}</Col>
                </Row>

            
            </div>



                <Row style={{marginTop: '20px', paddingBottom: '10px'}}>
                    <Col md="12">
                    <Link to="/profile/edit" className="btn btn-primary" style={{display: 'block'}}>Edit</Link>
                    </Col>
                </Row>
                </>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        profileData: state.profileReducer.data,
    };
  };
export default connect(mapStateToProps, {getProfile})(Detail);
