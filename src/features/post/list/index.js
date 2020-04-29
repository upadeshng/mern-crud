import React, { Component} from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {connect} from 'react-redux'
import {getAll} from '../action'

import PostListTable from "./tablePost"
import {Link} from 'react-router-dom'

class PostList extends Component {

    state={
        page:'',
        drugFilter:'',
    }
   
    componentDidMount(){
        this.props.getAll();
    }

    
    render() {

        const {postListingData} = this.props;


        if(!postListingData){
            return (
                <div>Loading..</div>
            )
        }
        
        return (
                <div>

                    <h4>Post <small>Listing</small></h4>

                        <Link style={{float: 'right', marginTop: '-38px'}} className='btn btn-small btn-outline-success' to={'/post/create'} >+ ADD</Link>

                    
                    <div className="plane-border-container">

                        <PostListTable
                        handleFilterChange={this.handleFilterChange}
                        handleEdit={this.handleEdit}
                        />
                    </div>
                </div>
        )
                
    }
}




const mapStateToProps=state=>({
    postListingData: state.mernPostReducer.postListingData,
})
export default connect(mapStateToProps, {getAll})(PostList)
