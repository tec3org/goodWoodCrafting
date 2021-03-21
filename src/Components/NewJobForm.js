import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Cancel,
        FadeForm,
        JobForm,
        CreateJob} from './Styled'

class NewJobForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            inputs: [{material: '', amount: 0}],
            sum: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSum = this.handleSum.bind(this)
    }

    firstInput = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ error: null})
    }

    addInput = (event) => {
        this.setState(prevState => ({ inputs: [...prevState.inputs, {material: '', amount: 0}]}))
    }


    handleChange = (e) => {
        this.setState({input: e.target.value})
    }

    handleSum = (event) => {
        this.setState({
            inputs: event.target.value
        })
    }

    componentDidMount() {
        this.firstInput.current.focus();
    }

    render() {

        const {error, inputs, sum} = this.state;
        let initialValue = 0
        // let sum = inputs.amount.reduce(
        //     (accumulator, currentValue) => accumulator + currentValue.amount, initialValue
        // )
        console.log(inputs)

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
                                        id={inputId}
                                    />
                                    <label htmlFor={amntId}> {amntId}: </label>
                                    <input 
                                        type='text'
                                        placeholder='Cost'
                                        name={amntId}
                                        id={amntId}
                                        onChange={this.handleSum}
                                    />
                                <button> - </button>
                                </div>
                            )
                        })}
                        <br/>
                        {/* <label>Total: {sum}</label> */}
                        <br/>
                        <br/>
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