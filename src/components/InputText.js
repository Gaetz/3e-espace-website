import React from 'react';

const InputText = (props) => {
    const input = props.textarea ?
        <textarea
            value={props.value}
            onChange={props.onChange}
            type={props.type}
            placeholder={props.label}
            id={props.id}
            className="form-control"
        />
        : <input
            value={props.value}
            onChange={props.onChange}
            type={props.type}
            placeholder={props.label}
            id={props.id}
            className="form-control"
        />

    return(
        <div className="form-group row">
            <label htmlFor={props.id} className="col-sm-2 col-form-label">{props.label}</label>
            <div className="col-sm-10">
                {input}
            </div>
        </div>
    );
}

export default InputText;