import React, {Component} from 'react'

import {connect} from 'react-redux'
import Detail from './detail'
import Comment from '../createComment'

import {getPost} from '../action'
class postView extends Component {
    state = {
        postId: this.props.match.params.id
    }

    componentDidMount(){
        this.props.getPost(this.state.postId);
    }

    /* componentWillReceiveProps(recievedProps) {
        
        if(recievedProps.match.params.id){

            this.setState({})

        }
    } */



    render () {
        const {postData} = this.props;

        console.log('aabc',this.props)
        
        if(!postData){
            return (
                <>Loading..</>
            )
        }

        const post = postData.item

        return (
            <>
                <h4>Post <small>{post.title}</small></h4>
                <div className="form-container">
                    <Detail 
                        post = {post}
                    />
                </div>

                <div className="form-container" style={{marginTop: '15px'}}>
                    <Comment 
                        post = {post}
                    />
                </div>
            </>
        )
    }


}

const mapStateToProps = state => ({
    postData: state.mernPostReducer.postData,
})
export default connect(mapStateToProps,{getPost})(postView)