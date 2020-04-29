import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import {connect} from 'react-redux';
import {} from './action'
import {withRouter} from 'react-router-dom'


class ValidationMessage extends Component {

    state = {
    }

    componentDidMount(){
    }

    componentWillReceiveProps(recievedProps) {
        this.setState({
            validationErrors: recievedProps.validationErrors
        })
    }


    render() {


        const validationErrors = this.state.validationErrors
        if(!validationErrors || !validationErrors.errors){
            return <></>

        }


        console.log('eerr',validationErrors.errors)
        return (<>
            {
                validationErrors.errors.map((item, index)=>{

                    console.log(item)
                    return (

                        <>
                        <ul className="error-message">
                        <li className="error">{item.msg}</li>
                        </ul>
                        </>
                        
                    )
                })

            }
        </>);
    }
    
}

const mapStateToProps = state => ({
    validationErrors: state.mernPostReducer.validationErrors,
})

export default connect(mapStateToProps, {})(withRouter(ValidationMessage))