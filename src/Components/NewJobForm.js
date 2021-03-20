import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Cancel,
        FadeForm,
        JobForm,
        CreateJob} from './Styled'

class NewJobForm extends Component {

    state= {
        error: null,
        inputs: [{material: '', amount: 0}]
    }

    firstInput = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault()
        const { price } = event.target;

        this.setState({ error: null})
    }

    addInput = (event) => {
        this.setState(prevState => ({ inputs: [...prevState.inputs, {material: '', amount: 0}]}))
    }


    handleChange = (e) => {
        if(['material', 'amount'].includes(e.target.className) ) {
            let inputs = [this.state.inputs]

            inputs[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({ inputs }, () => console.log(this.state.inputs))
        } else {
            this.setState({ [e.target.name]: e.target.value})
        }
    }

    componentDidMount() {
        this.firstInput.current.focus();
    }

    render() {

        const {error, inputs} = this.state;

        return (
            <div>
                <h2>Contract</h2>
                <JobForm>
                    <FadeForm onSubmit={this.handleSubmit}
                        onChange={this.handleChange}>
                        <div>{error && <p>{error}</p>}</div>
                        <label htmlFor='price' value=''>Client: </label>
                        <br/>
                        <input 
                            type='text'
                            placeholder='Client Name'
                            id='price'
                            ref={this.firstInput}
                            />
                        <br/>
                        <label htmlFor='price' value=''>Job Price: </label>
                        <br/>
                        <input 
                            type='text'
                            placeholder='Initial Price'
                            id='price'
                            />
                        <br />
                        <label htmlFor='payment' value=''>Payment: </label>
                        <br/>
                        <input 
                            type='text'
                            placeholder='Payment'
                            id='payment'
                            />
                        <br />
                        <label htmlFor='materials' value=''>Materials </label>
                        <button onClick={this.addInput}>+</button>
                        {inputs.map((val, idx) => {
                            let inputId = `Material`, amntId = `Amount`
                            return(
                                <div key={idx}>
                                    <br />
                                    <label htmlFor={inputId}>{inputId}: </label>
                                    <input 
                                        type='text'
                                        placeholder='Type'
                                        name={inputId}
                                    />
                                    <label htmlFor={amntId}> {amntId}: </label>
                                    <input 
                                        type='text'
                                        placeholder='Cost'
                                        name={amntId}
                                    />
                                <button> - </button>
                                </div>
                            )
                        })}
                        <br/>
                        {/* <label>
                            {for(let i = 0; )}
                        </label> */}
                        <CreateJob type='submit'>Save</CreateJob>
                        <Link to="/Guides">
                          <Cancel>Cancel</Cancel>
                       </Link>
                    </FadeForm>
                </JobForm>
            </div>
        )
    }
}



export default NewJobForm