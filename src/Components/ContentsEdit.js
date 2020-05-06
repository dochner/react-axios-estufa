import React from 'react'
import axios from 'axios'

export default class ContentsEdit extends React.Component {
    state = {
        temperature: '',
    }

    handleChange = event => {
        this.setState({ temperature: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault()

        const temp = {
            temperature:  this.state.temperature
        }

        axios.put('http://www.mocky.io/v2/5eb208f4320000739428fa31', { temp })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Temperature: <input type="number" name="temperature" onChange={this.handleChange}></input></label>
                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
}