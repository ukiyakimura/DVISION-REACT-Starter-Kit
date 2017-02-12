import React from 'react';
import { TextField } from 'redux-form-material-ui'

const MUIFloatingTextField = props => (
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
    type={props.type}
    multiLine={props.multiLine}
  />
)

export default MUIFloatingTextField;