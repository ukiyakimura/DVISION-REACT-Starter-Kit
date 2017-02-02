import React from 'react';
import { TextField } from 'redux-form-material-ui'

const renderTextField = props => (
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
  />
)

export default renderTextField;