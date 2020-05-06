
import React from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

export default class ContentsList extends React.Component {
    state = {
        contents: [],
    };

    componentDidMount() {
        axios.get('http://www.mocky.io/v2/5eb208f4320000739428fa31')
        .then(res =>
            {
                console.log(res)
                this.setState({ contents : res.data })
            })
    }

    render () {
        return (
             <Table>
                 <tr>
                 <thead>Temperature</thead>
                 { this.state.contents.map(content => <td key = {content.id} >{content.temperature}</td>)} 
                 </tr>
                 <tr>
                 <thead>Humidity</thead>
                 { this.state.contents.map(content => <td key = {content.id} >{content.humidity}</td>)} 
                 </tr>
                 <tr>
                 <thead>Lightness</thead>
                 { this.state.contents.map(content => <td key = {content.id} >{content.lightness}</td>)} 
                 </tr>
                 <tr>
                 <thead>Water Level</thead>
                 { this.state.contents.map(content => <td key = {content.id} >{content.level}</td>)} 
                 </tr>
                 <tr>
                 <thead>Soil Humidity</thead>
                 { this.state.contents.map(content => <td key = {content.id} >{content.soil}</td>)} 
                 </tr>
             </Table>
        )
    }
}