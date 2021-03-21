import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import JobList from './JobList'
import {Deleted, NoJob, Editing} from './Styled'


class Jobs extends Component {
    constructor(props){
        super(props)
        this.state = {
            jobs: []
        }
    }

    static defaultProps = {
        match: {
            params: {}
        },
    }

        state = {
            error: null,
        }
    

    static contextType = JobList;

    // clickDelete = (id) => {
    //     this.setState({ error: null})
    //     fetch(`${api.API_ENDPOINT}/jobs/${id}`, {
    //         method: "DELETE",
    //             headers: {
    //                 Authorization: `Bearer ${Token.getAuthToken()}`,
    //                 "content-type": "application/json",
    //             },
    //     })
    //     .then((res) => {
    //         if(!res.ok) return res.json().then((e) => Promise.reject(e))
    //     })
    //     .then(() => {
    //         this.context.deleteJob(id)
    //         this.handleJobChange(id)
    //     })
    //     .catch((error) => {
    //         console.error({error})
    //         this.setState({error})
    //     })
    // }

    // handleJobChange = (id) => {
    //     const updateJobs = this.state.jobs.filter((job) => {
    //         return job.id !== id
    //     })
    //     this.setState({ jobs: updateJobs})
    // }

    // componentDidMount() {
    //     fetch(`${api.API_ENDPOINT}/jobs`)
    //     .then((response) => response.json())
    //     .then((jobs) => this.setState({ jobs: jobs}))
    // }

    render() {

        const jobs = this.state
        // const jobbed = jobs.sort((a, b) => (a.id < b.id ? 1: -1))

        if(jobbed.length > 0) {
            return(
                <div>
                    <h1>Contracted Jobs</h1>
                    <Link to='/NewJob'>
                        <button>Add Job</button>
                    </Link>
                    <br/>
                    {jobbed.map((job) => (
            <div key={job.id}>
              <div>

                <label className="under">
                  Client:
                  <br />
                  <p>{job.client}</p>
                </label>
                <br />
                <label className="under">
                  Job:
                  <br />
                  <p>{job.jobName}</p>
                </label>
                <br />
                <label className="under">
                  Price:
                  <br />
                  <p>{job.price}</p>
                </label>
                <br />
              </div>
              <div>
                <Link to={`jobs/${job.id}`}>
                <Editing disabled={job.is_resolved}>Edit</Editing>
                </Link>
                <Link to="/jobs">
                <Deleted
                    type="button"
                    disabled={job.is_resolved}
                    onClick={() => this.clickDelete(job.id)}
                    >Delete
                </Deleted>
                </Link>
                </div>
            </div>
          ))}
                </div>
            )
        } else if (jobbed.length <= 0) {
            return(
                <NoJob>
                    <h1>No Jobs To Show</h1>
                    <Link to='/NewJob'>
                            <button>Add Job</button>
                    </Link>
                    <br/>
                </NoJob>
            )
        }
    }
}


export default Jobs