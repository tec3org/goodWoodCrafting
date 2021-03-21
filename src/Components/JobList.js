import React, {Component} from 'react'

const JobList = React.createContext({
    job: {},
    jobs: [],

    setError: () => {},
    clearError: () => {},

    setJob: () => {},
    addJob: () => {},
    updateJob: () => {},
    deleteJob: () => {}
}) 

export default JobList

export class JobListProvider extends Component {
    state = {
        job: {},
        error: null
    }

    setError = (error) => {
        console.error(error);
        this.setState({ error });
      };
    
    clearError = () => {
        this.setState({ error: null });
      };

      setJob = (job) => {
        this.setState({ job });
      };
    
      addJob = (job) => {
        this.setJob([...this.state.jobs, job]);
      };
    
      updateJob = (job) => {
        this.setJob([...this.state.jobs, job]);
      };
    
      deleteJob = () => {
        this.setJob({});
      };

      render() {
        const value = {
            job: this.state.job,
            jobs: this.state.jobs,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setJob: this.setJob,
            addJob: this.addJob,
            updateJob: this.updateJob,
            deleteJob: this.deleteJob,
        }

        return(
            <JobList.Provider value={value}>
                {this.props.children}
            </JobList.Provider>
        )
    }
}