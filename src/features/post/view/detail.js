import React, {Component} from 'react';

import {Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {} from '../action'
import moment from 'moment';

class Detail extends Component {

    

    componentDidMount(){
    }

    handleDelete = (e, id) => {
        e.preventDefault();


        if (window.confirm('Are you sure you want to delete?')){

            // this.props.deleteExpense(id, this.props.history);
        }

    }

    render() {

        const {post} = this.props

        return (
            <div>

            <Row>
                <Col md="4">
                    <Row>
                        <Col md="4">Date</Col>
                        <Col md="6">{post.date ? moment(post.date).format('YYYY-MM-DD') : ''}</Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col md="4">
                    <Row>
                        <Col md="4">Name</Col>
                        <Col md="6">{post.title}</Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col md="4">
                    <Row>
                        <Col md="4">Notes</Col>
                        <Col md="6">{post.content}</Col>
                    </Row>
                </Col>
            </Row>




            <Row style={{marginTop: '30px'}}>
                <Col md="12">
                    <Link to={'/post/edit/' + post._id} className='btn btn-outline-success' style={{marginRight: '10px'}}>Edit</Link>
                    <Link to={'/post/list'} className='btn btn-outline-default'>Back To List</Link>

                    {/* <Link to='' onClick={(e)=>this.handleDelete(e, expense.id)} className='btn btn-danger pull-right'>Delete</Link> */}
                </Col>
            </Row>


            </div>
        );
    }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {})(withRouter(Detail))