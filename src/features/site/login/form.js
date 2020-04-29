import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';
import {connect} from 'react-redux'
import {history} from '../../../_helpers/history'
import { withRouter } from "react-router-dom"



import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import {submitLogin} from '../action'

  import { Redirect } from 'react-router';

class Form extends Component {

    state = {
        username: 'upadesh.ng@gmail.com',
        password: 'Secret123',
    }

    componentDidMount(){
        let pharmacy_id = this.props.pharmacy_id;
        let user_id = this.props.user_id;
        // this.props.getDraft(pharmacy_id, user_id);
    }

    // componentWillMount () {
    //     this.id = `toggle_${Math.random().toString().replace(/0\./, '')}`;
    // }

    handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        if(name === 'username'){
            this.setState({'username': value})
        }

        if(name === 'password'){
            this.setState({'password': value})
        }

    }
    
    handleSubmit = () => {
        // e.preventDefault();

        const data = this.state;
        this.props.submitLogin(data, this.props.history);

      }

    render() {

            
        return (
            <div style={{padding: '25px'}}>
                
                <form name="blog_post" className="form-horizontal" onSubmit={(e) => { e.preventDefault() }}>

                <Row style={{marginTop: '10px'}}>

                <Col md="12" style={{textAlign: 'center'}}>

                
                <h2 style={{marginBottom: '25px'}}>LOGIN</h2>

                <input 
                            type="text" 
                            name="username" 
                            value={this.state.username}
                            className="form-control"
                            placeholder="username"
                            onChange={this.handleChange} 
                            />
                            
                <input 
                            type="password" 
                            name="password" 
                            value={this.state.password}
                            className="form-control"
                            placeholder="password"
                            onChange={this.handleChange} 
                            style={{marginTop: '15px'}}
                            />


                    <div className="text-left">

                            <button type="button"
                                id="login_submit"
                                className="btn-success btn"
                                onClick={(e) =>  this.handleSubmit()  }
                                onKeyPress={(e) =>  this.handleSubmit()  }
                                style={{marginTop: '20px', display: 'block'}}
                                        >
                            LOGIN</button>

                            </div>

                            
                </Col>
                </Row>

                

            </form>

            
            



            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginResult: state.loginReducer.data,
    };
  };
export default connect(mapStateToProps, {submitLogin})(withRouter(Form));