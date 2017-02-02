import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm';

import { loginUser } from '../actions/auth.action';
import { TextField } from 'redux-form-material-ui'
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';

const validation = values => {
  const errors = {}
  const requiredFields = [ 'email', 'password']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = props => (
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
  />
)

class LoginPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.processForm = this.processForm.bind(this);
  }

  processForm(data) {
    console.log(data);
    this.props.loginUser(data);
  }

  /* Render the component. */
  render() {  
    return (
      <LoginForm
        onSubmit={this.processForm}
        renderTextField={renderTextField}
        validation={validation}
      />
    );
  }

}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (data) => {
            dispatch(loginUser(data))
        }
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        authenticated:state.auth.authenticated
    }
}

export default LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
