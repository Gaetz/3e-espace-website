import React from 'react';

const InputDate = (props) => {
    const inputDay = <input
            value={props.valueDay}
            onChange={props.onChangeDay}
            type={props.type}
            placeholder={props.labelDay}
            //id={props.id}
            min="1" max="31"
            className="form-control"
        />
    const inputMonth = <input
            value={props.valueMonth}
            onChange={props.onChangeMonth}
            type={props.type}
            placeholder={props.labelMonth}
            //id={props.id}
            min="1" max="12"
            className="form-control"
        />
    const inputYear = <input
            value={props.valueYear}
            onChange={props.onChangeYear}
            type={props.type}
            placeholder={props.labelYear}
            //id={props.id}
            min="1970" max="2100"
            className="form-control"
        />

    return(
        <div className="form-group row">
            <label htmlFor={props.id} className="col-sm-2 col-form-label">{props.label}</label>
            <div className="col-sm-3">
                {inputDay}
            </div>
            <div className="col-sm-3">
                {inputMonth}
            </div>
            <div className="col-sm-3">
                {inputYear}
            </div>
        </div>
    );
}

export default InputDate;