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
import {createComment} from '../action'
import {withRouter} from 'react-router-dom'
import ValidationMessage from '../validationMessage'


class FormAdd extends Component {

    state = {
        postId: this.props.match.params.id,
    }

    componentDidMount(){
    }

    handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        if(name === 'content'){
            this.setState({content: value})
        }
        
        this.setState({userId: parseInt(22)})
    }

    handleDateChange=(input)=>{

        input = moment(input).format('YYYY-MM-DD')

        this.setState({date: input})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(this.state)
        this.props.createComment(this.state.postId, this.state, this.props.history);
    }

    render() {

        return (<>

            <ValidationMessage />
            
            <form onSubmit={this.handleSubmit}>


            <Row>
                <Col md="8">
                <div className="form-group">
                        <label>Comment:  </label>
                        <input 
                            type="text" 
                            name="content" 
                            className="form-control"
                            value={this.state.content}
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
                            Submit</button>
            </div>
            
                    
        </form>
    
        </>);
    }
    
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {createComment})(withRouter(FormAdd))