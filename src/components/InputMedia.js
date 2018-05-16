import React, { Component } from 'react';
import { MediaType } from '../constants/enums';

class InputMedia extends Component {

    constructor(props) {
        super();
        this.state = {
            kind: MediaType.VIDEO,
            filename: ''
        };
        this.handleChangeKind = this.handleChangeKind.bind(this);
    }

    handleChangeKind(e) {
        this.props.onMediaKindChange(e.target.value);
        this.setState({ kind: e.target.value });
    }

    render() {
        let input = null;
        switch(this.state.kind) {
            case MediaType.VIDEO:
                input = <input
                    value={this.props.value}
                    onChange={this.props.onChange}
                    type='text'
                    placeholder='Video url'
                    id={this.props.id}
                    className='form-control'
                />
                break;
            case MediaType.SOUNDCLOUD:
                input = <input
                    value={this.props.value}
                    onChange={this.props.onChange}
                    type='text'
                    placeholder='Soundcloud url'
                    id={this.props.id}
                    className='form-control'
                />
                break;
            case MediaType.IMAGE:
                input = <input
                    value={this.props.value}
                    onChange={this.props.onChange}
                    type='file'
                    placeholder='Upload image'
                    id={this.props.id}
                    className='form-control'
                />
                break;
            default: input = <p>Bad input type</p>; break;
        }

        const { kind } = this.state;

        return(
            <div className='form-group row'>
                <label htmlFor={this.props.id} className='col-sm-2 col-form-label'>{this.props.label}</label>
                
                <div className='col-sm-10'>
                    <div className='form-check form-check-inline'>
                        <input type='radio' id='video' name='kind' value={MediaType.VIDEO} className="form-check-input"
                            checked={kind === MediaType.VIDEO} onChange={this.handleChangeKind}/>
                        <label className="form-check-label" htmlFor='video'>Video</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input type='radio' id='souncloud' name='kind' value={MediaType.SOUNDCLOUD} className="form-check-input"
                            checked={kind === MediaType.SOUNDCLOUD} onChange={this.handleChangeKind} />
                        <label className="form-check-label" htmlFor='souncloud'>Souncloud</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input type='radio' id='image' name='kind' value={MediaType.IMAGE} className="form-check-input"
                            checked={kind === MediaType.IMAGE} onChange={this.handleChangeKind} />
                        <label className="form-check-label" htmlFor='image'>Image</label>
                    </div>
                    {input}
                </div>
            </div>
        );
    }

}

export default InputMedia;