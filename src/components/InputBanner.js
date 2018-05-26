import React, { Component } from 'react';

class InputBanner extends Component {

    constructor(props) {
        super();
        this.state = {
            filename: ''
        };
    }

    render() {
        const input = <input
            value={this.props.value}
            onChange={this.props.onChange}
            type='file'
            placeholder='Upload image'
            id={this.props.id}
            className='form-control'
        />

        return (
            <div className='form-group row'>
                <label htmlFor={this.props.id} className='col-sm-2 col-form-label'>{this.props.label}</label>
                
                <div className='col-sm-10'>
                    {input}
                </div>
            </div>
        );
    }

}

export default InputBanner;