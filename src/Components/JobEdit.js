import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import JobList from './JobList'

class JobEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: []
        }
    }

    static defaultProps = {
        match: {
            params: {},
        }
    }

    static contextType = JobList

    componentDidMount() {
        const idParam = this.props.match.params.id

        JServices.getJob(Number(idParam)).catch(this.context.setError)
    }
}


// TODO