import React, {Component} from 'react'
import {Link} from 'react-router-dom'

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

    componentDidMount() {
        this.firstInput.current.focus();
    }

    render() {

        const {error, inputs} = this.state;

        return (
            <div>
                <h2>Contract</h2>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>{error && <p>{error}</p>}</div>

                        <label htmlFor='price' value=''>Job Price: </label>
                        <input 
                            type='text'
                            placeholder='Initial Price'
                            id='price'
                            ref={this.firstInput}
                            required
                            />
                        <br />
                        <br />
                        <label htmlFor='payment' value=''>Payment: </label>
                        <input 
                            type='text'
                            placeholder='Payment'
                            id='payment'
                            />
                        <br />
                        <br />
                        <label htmlFor='materials' value=''>Materials === </label>
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
                                </div>
                            )
                        })}
                        <br/>
                        <button>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}



export default NewJobForm