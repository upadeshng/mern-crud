import React, {Component} from 'react'

import {connect} from 'react-redux'
import FormEdit from './formEdit'
import {getProfile} from '../action'
class EditProfile extends Component {
    state = {
    }

    componentDidMount(){
        this.props.getProfile();
        
    }

    componentWillReceiveProps(recievedProps) {
    }

    render () {
        const {profileData} = this.props;

        if(!profileData.user){
            return (
                <>Loading..</>
            )
        }

        console.log('editing',this.props.profileData)

        return (
            <>
                <h4>Edit Profile <small>{profileData.user.name}</small></h4>
                <div className="form-container">
                    <FormEdit />
                </div>
            </>
        )
    }


}

const mapStateToProps = state => ({
    profileData: state.profileReducer.data,
})
export default connect(mapStateToProps,{getProfile})(EditProfile)