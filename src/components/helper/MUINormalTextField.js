import React from 'react';
import { TextField } from 'redux-form-material-ui'

const MUINormalTextField = props => (
    <div>
        <label>{props.label}</label>
        <TextField hintText= {props.hintText}
            errorText= {props.touched && props.error }
            {...props}
            multiLine={props.multiLine}
        />
    </div>
)

export default MUINormalTextField;