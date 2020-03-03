import React, { Component } from 'react';
import AddUserBody from './AddUserBody';
import axios from 'axios';
import {addUserValidate} from '../validation';

class ExplorerComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseData: '',
            statusCode: '',
            loading: false
        };
    }

    componentDidMount() {
        // Creates payload and form validation objects if POST or PUT request
        if (this.props.method === 'POST' || this.props.method === 'PUT') {
            const payload = this.props.body.reduce((obj, item) => {
                obj[item.name] = '';
                return obj;
            }, {});
            const errors = this.props.body.reduce((obj, item) => {
                if (item['required'] && item['required'] === true) {
                    obj[item.name] = this.validateForm(this.props.title, '', item.name);
                } 
                return obj;
            }, {});
            this.setState({payload, errors});
        }
    }

    bodyChangeHandler = formField => (event) => {
        this.setState({
            payload: {...this.state.payload, [formField]: event.target.value },
            errors: {...this.state.errors, [formField]: this.validateForm(this.props.title, event.target.value, formField)}
        });
    }

    validateForm(type, input, formField) {
        // Added switch statement to validate which request type to perform form validation. Can add more if needed. 
        switch (type) {
            case 'Add new user':
                return addUserValidate(formField, input, this.props.body)
            default:
                return;
        }
    }

    renderBody(type, body) {
        // Switch statement for rendering form body input. Can add more if needed. 
        switch (type) {
            case 'Add new user':
                return <AddUserBody type={type} body={body} changeHandler={this.bodyChangeHandler} payload={this.state.payload}/>
            default: 
                return;
        }
    }

    handleSubmit() {
        // Check form validation if POST or PUT request.
        if (this.props.method === 'POST' || this.props.method === 'PUT') {
            for (let i in this.state.errors) {
                if (this.state.errors[i] !== '') {
                    alert(this.state.errors[i]);
                    return;
                }
            }
        }

        let axiosConfig = {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'cache-control': 'no-cache'
            }
        }

        if (this.props.method === 'POST') {
            this.setState({loading:true});
            axios.post(this.props.url, this.state.payload, axiosConfig)
            .then((res) => {
                this.setState({responseData: res, statusCode: 'Status code: ' + res.status, loading:false});
            }).catch((err) => {
                alert('Request failed: ', err);
                this.setState({loading:false});
            });
        } 
        // For other requests if needed
        if (this.props.method === 'GET') {

        }
        if (this.props.method === 'PUT') {

        }
        if (this.props.method === 'DELETE') {

        }
    }

    render() {
        return (
            <div>
                <h2 className="headerText">{this.props.title}</h2>
                <h3 className="headerText">{this.props.method}</h3>
                <p>Base URL: {this.props.url}</p>
                {this.props.method === 'POST' || this.props.method === 'PUT' ? 
                    this.renderBody(this.props.title, this.props.body) 
                    : null
                }
                <button onClick={()=>this.handleSubmit()}>Send Request</button>
                <p>{this.state.loading ? '...Loading response' : null}</p>
                <p className="responseBox">
                    {this.state.statusCode}
                    <br />
                    {JSON.stringify(this.state.responseData.data)}
                </p>
            </div>
        );
    }
}

export default ExplorerComponent;