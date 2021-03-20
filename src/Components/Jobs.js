import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import JobList from './JobList'


class Jobs extends Component {
    constructor(props){
        super(props)
        this.state = {
            jobs: []
        }
    }

    // static defaultProps = {
    //     state = {
    //         error: null,
    //     }
    // }

    static contextType = JobList;

    render() {
        return(
            <div>
                <Link to='/NewJob'>
                    <button>Add Job</button>
                </Link>
            </div>
        )
    }
}


export default Jobs