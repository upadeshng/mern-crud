import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import {
    Link,
  } from 'react-router-dom';
import {connect} from 'react-redux';

import Select from 'react-select';
import Creatable from 'react-select/lib/Creatable'
import AsyncSelect from 'react-select/lib/Async';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import {postUpdateUser} from '../action'
import {withRouter} from 'react-router-dom'
import ValidationMessage from './validationMessage'


class FormEdit extends Component {

    state = {
    }

    componentDidMount(){
        const user = this.props.profileData.user;

        this.setState({
            _id: user._id,
            name: user.name,
            address: user.address,
            mobile: user.mobile,
            email: user.email,
            username: user.username,
            password: user.password,
            roleId: user.roleId,
            roleLabel: user.roleName,
        })
    }

    componentWillReceiveProps(recievedProps) {
        const user = recievedProps.profileData.user;
        this.setState({
            _id: user._id,
            name: user.name,
            address: user.address,
            mobile: user.mobile,
            email: user.email,
            username: user.username,
            password: user.password,
            roleId: user.roleId,
            roleLabel: user.roleName,
        })
    }


    handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        if(name === 'name'){
            this.setState({name: value})
        }

        else if(name === 'address'){
            this.setState({address: value})
        }

        else if(name === 'mobile'){
            this.setState({mobile: value})
        }

        else if(name === 'email'){
            this.setState({email: value})
        }

        else if(name === 'username'){
            this.setState({username: value})
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(this.state)
        this.props.postUpdateUser(this.state, this.props.history);
    }

    render() {


        return (<>

            <ValidationMessage />

            <form onSubmit={this.handleSubmit}>

            <Row>
                <Col md="8">
                <div className="form-group">
                        <label>Name:  </label>
                        <input 
                            type="text" 
                            name="name" 
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChange}
                            />
                    </div>
                    
                </Col>

            </Row>


            <Row>
                <Col md="8">
                <div className="form-group">
                        <label>Address:  </label>
                        <input 
                            type="text" 
                            name="address" 
                            className="form-control"
                            value={this.state.address}
                            onChange={this.handleChange}
                            />
                    </div>
                    
                </Col>

            </Row>

            
            <Row>
                <Col md="8">
                <div className="form-group">
                        <label>Email:  </label>
                        <input 
                            type="text" 
                            name="email" 
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                    </div>
                    
                </Col>

            </Row>


            <div className="form-group">
                <button type="submit"
                                id="btn_submit"
                                onClick={(e)=>this.handleSubmit(e) }
                                style={{marginTop: '10px'}}
                                className="btn-success btn">
                            Update</button>
            </div>
            
                    
        </form>
    
        </>);
    }
    
}

const mapStateToProps = state => ({
    profileData: state.profileReducer.data,
})

export default connect(mapStateToProps, {postUpdateUser})(withRouter(FormEdit))