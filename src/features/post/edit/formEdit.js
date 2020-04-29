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
import {update} from '../action'
import {withRouter} from 'react-router-dom'
import ValidationMessage from '../validationMessage'

class FormEdit extends Component {

    state = {
    }

    componentDidMount(){
        const post = this.props.post;

        this.setState({
            id: post._id,
            title: post.title,
            note: post.content,
            date: post.date ? moment(post.date).format('YYYY-MM-DD') : '',
            userId: post.userId,
        })
    }

    componentWillReceiveProps(recievedProps) {
        const post = recievedProps.post;
        this.setState({
            id: post._id,
            title: post.title,
            note: post.content,
            date: post.date ? moment(post.date).format('YYYY-MM-DD') : '',
            userId: post.userId,
        })
    }

    handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        if(name === 'title'){
            this.setState({title: value})
        }

        else if(name === 'note'){
            this.setState({note: value})
        }
        
    }

    handleDateChange=(input)=>{

        input = moment(input).format('YYYY-MM-DD')

        this.setState({date: input})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(this.state)
        this.props.update(this.state, this.props.history);
    }

    render() {

        return (<>
            <ValidationMessage />

            <form onSubmit={this.handleSubmit}>

            <Row>
                <Col md="8">
                <div className="form-group">
                        <label>Date:  </label>
                        <DatePicker
                                value={this.state.date}
                                name="date" 
                                dateFormat="Y-M-d"
                                style={{'width': "100%"}}
                                className="form-control"
                                placeholderText=""
                                showYearDropdown
                                autoComplete="off"
                                onChange={(e)=>this.handleDateChange(e)}
                            />
                    </div>
                    
                </Col>

            </Row>

            <Row>
                <Col md="8">
                <div className="form-group">
                        <label>Name:  </label>
                        <input 
                            type="text" 
                            name="title" 
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleChange}
                            />
                    </div>
                    
                </Col>

            </Row>

            <Row>
                <Col md="8">
                <div className="form-group">
                        <label>Notes:  </label>
                        <input 
                            type="text" 
                            name="note" 
                            className="form-control"
                            value={this.state.note}
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
})

export default connect(mapStateToProps, {update})(withRouter(FormEdit))