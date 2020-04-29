import React, {Component} from 'react'

import {connect} from 'react-redux'
import FormAdd from './formAdd'
import {} from '../action'
class AddExpenseType extends Component {

    render () {

        return (
            <>
                <h4>Mern Post Create</h4>
                <div className="form-container">
                    <FormAdd 
                    />
                </div>
            </>
        )
    }


}

const mapStateToProps = state => ({
})
export default connect(mapStateToProps,{})(AddExpenseType)