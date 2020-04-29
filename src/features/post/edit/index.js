import React, {Component} from 'react'

import {connect} from 'react-redux'
import FormEdit from './formEdit'
import {getPost} from '../action'
class EditPost extends Component {
    state = {
        postId: this.props.match.params.id
    }

    componentDidMount(){
        this.props.getPost(this.state.postId);
    }

    componentWillReceiveProps(recievedProps) {
    }

    render () {
        const {postData} = this.props;

        if(!postData){
            return (
                <>Loading..</>
            )
        }

        const post = postData.item

        return (
            <>
                <h4>Edit Post <small>{post.name}</small></h4>
                <div className="form-container">
                    <FormEdit 
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
export default connect(mapStateToProps,{getPost})(EditPost)