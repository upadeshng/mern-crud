import React, { Component} from 'react'
import 'react-table/react-table.css'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAll, deletePost} from '../action'
import { Table } from 'reactstrap';
import DatePicker from "react-datepicker";
import Pagination from "react-js-pagination"
import moment from 'moment';
import history from '../../../history'


class ExpenseTypeTable extends Component {

    state={
        page:'',
    }

    componentDidMount() {


        if(this.props.postListingData.items){
            this.setState({
                items: this.props.postListingData.items
            })
        }
    }

    componentWillReceiveProps(recievedProps) {

        if(recievedProps.postListingData.items){
            this.setState({
                items: recievedProps.postListingData.items
            })
        }

        if(recievedProps.isDeleted && this.props.isDeleted !== recievedProps.isDeleted){
            this.props.getAll();
        }
    }

    handlePageChange=(page)=>{
        this.setState({page: page})

        /* get all filters */
        let param = this.state;

        /* send current filter immediately as state can't get current value */
        param.page = page;

        this.reloadGrid(param);
    }


    handleFilterChange=(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        /* get all filters */
        let param = this.state;

        if(name === 'filterName'){
            this.setState({name: value})
            param.filterName = value;
        }

        else if(name === 'filterNote'){
            this.setState({name: value})
            param.filterNote = value;
        }


        this.reloadGrid(param);
    }

    handleFilterChangeDateFrom=(filter)=>{

        filter = moment(filter).format('YYYY-MM-DD')

        this.setState({filterDateFrom: filter})

        /* get all filters */
        let param = this.state;

        /* send current filter immediately as state can't get current value */
        param.filterDateFrom = filter;

        this.reloadGrid(param);
    }

    handleFilterChangeDateTo=(filter)=>{

        filter = moment(filter).format('YYYY-MM-DD')

        this.setState({filterDateTo: filter})

        /* get all filters */
        let param = this.state;

        /* send current filter immediately as state can't get current value */
        param.filterDateTo = filter;

        this.reloadGrid(param);
    }

    reloadGrid=(param)=>{

        this.props.getAll(param);
    }

    handleDelete = (item, index)=>{

        if (window.confirm('Are you sure you want to delete post?')){
            this.props.deletePost(item._id);
        }

    }

    render() {

        const {postListingData} = this.props;

        const items = this.state.items

        if(!items){
            return <div>No data found</div>

        }
        const postListing = postListingData.items

        return <><Table responsive size="sm">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Note</th>
                    <th style={{width: '115px'}}>Created At</th>
                    <th style={{width: '215px'}}></th>
                </tr>
                <tr className="filters" style={{'background': '#E3EAF2'}}>
                    
                    <th style={{width: '170px'}}>
                    <DatePicker
                            value={this.state.filterDateFrom}
                            name="filterDateFrom" 
                            dateFormat="Y-M-d"
                            style={{'width': "100%", height: '600px'}}
                            className="form-control"
                            size="sm"
                            placeholderText="From"
                            showYearDropdown
                            isClearable={true}
                            autoComplete="off"
                            onChange={(e)=>this.handleFilterChangeDateFrom(e)}
                        />

                        <DatePicker
                            value={this.state.filterDateTo}
                            name="filterDateTo" 
                            dateFormat="Y-M-d"
                            style={{'width': "100%"}}
                            className="form-control"
                            placeholderText="To"
                            showYearDropdown
                            isClearable={true}
                            autoComplete="off"
                            onChange={(e)=>this.handleFilterChangeDateTo(e)}
                        />
                    </th>

                    <th style={{'verticalAlign':'middle'}}>
                        <input 
                            type="text" 
                            name="filterName" 
                            className="form-control"
                            onChange={this.handleFilterChange}
                            />
                    </th>

                    <th style={{'verticalAlign':'middle'}}>
                        <input 
                            type="text" 
                            name="filterNote" 
                            className="form-control"
                            onChange={this.handleFilterChange}
                            />
                    </th>

                    <th style={{'verticalAlign':'middle'}}></th>

                    <th>
                    {/* action */}
                    </th>


                </tr>
            </thead>
            <tbody>
            {
                items.map((item, index)=>{

                    var date = item.date ? moment(item.date).format('YYYY-MM-DD') : '';
                    var createdAt = item.createdAt ? moment(item.createdAt).format('MMMM D, YYYY h:mm a') : '';
                    var updatedAt = item.updatedAt ? moment(item.updatedAt).format('MMMM D, YYYY h:mm a') : '';

                    return (

                        
                        <>
                        <tr>
                            <td>{date}</td>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            <td>{createdAt}</td>
                            <td align="right">

                                <Link className='btn btn-small btn-outline-success' to={'/post/view/' + item._id} >View</Link>
                                <Link className='btn btn-small btn-outline-default' to={'/post/edit/' + item._id}  style={{marginLeft: '5px'}} >Edit</Link>
                                <button className="btn btn-small btn-outline-danger" onClick={()=>this.handleDelete(item, index)}   style={{marginLeft: '5px'}} >Delete</button>

                            </td>

                        </tr>
                        
                        </>
                        
                    )
                })

            }
            </tbody>
        </Table>



        <div style={{width: '100%', display: 'table'}}>

                <div style={{float: 'left'}}>
                Listing {postListingData.pagination.start} - {postListingData.pagination.end} of {postListingData.pagination.itemCount} results
                </div>

                <div style={{float: 'right'}} className={postListingData.pagination.noShowPagination === true ? 'force-hide' : ''}>
                    <Pagination 
                        activePage={this.state.page || 1}
                        itemsCountPerPage={postListingData.pagination.pageSize}
                        totalItemsCount={postListingData.pagination.itemCount}
                        pageRangeDisplayed={5}
                        itemClass="page-item"
                        linkClass="page-link"
                        onChange={this.handlePageChange}
                        />
                </div>                
            </div>

        </>
    }
}

const mapStateToProps = state=>({
    postListingData: state.mernPostReducer.postListingData,
    isDeleted: state.mernPostReducer.isDeleted,
})
export default connect(mapStateToProps, {getAll, deletePost})(withRouter(ExpenseTypeTable))
