import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm';
import { loginUser } from '../actions/auth.action';
import {connect} from 'react-redux';

class LoginPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.processForm = this.processForm.bind(this);
  }

  processForm(data) {
    this.props.loginUser(data);
  }

  /* Render the component. */
  render() {  
    return (
      <LoginForm onSubmit={this.processForm} />
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
