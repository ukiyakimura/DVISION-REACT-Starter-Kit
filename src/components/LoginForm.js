import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import validate from './helper/LoginValidation';
import MUIFloatingTextField from './helper/MUIFloatingTextField';
/*
  alternative version using Const: No need for render method
  const LoginForm = props => {return(!!component inside!!)}
*/
class LoginForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    /*
      If using const instead of Class, this code below change into
      const { handleSubmit, pristine, reset, submitting, submitData, renderTextField, validation } = props
    */
    
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <Card className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="card-heading">Login</h2>

          <div className="field-line">
            <Field 
              name="email" 
              component={MUIFloatingTextField} 
              label="Email" 
              type="email" 
              multiLine={false}
            />
          </div>

          <div className="field-line">
            <Field 
              name="password" 
              component={MUIFloatingTextField} 
              label="Password" 
              type="password" 
              multiLine={false}
            />
          </div>

          <div className="button-line">
            <RaisedButton
              type="submit"
              disabled={pristine || submitting}
              label="Log in"
            />
          </div>

          <CardText>Don't have an account?
            <Link to={'/signup'}>Create one</Link>.</CardText>
        </form>
      </Card>
    )
  }
};

// Check onSubmit is required
LoginForm.propTypes = {   onSubmit: PropTypes.func.isRequired, };

/* 
  Connect the form with redux-form in order to making handleSubmit, 
  submitting, pristine, reset avaiable in this page 
*/
// console.log(errors);
export default reduxForm({form: 'LoginForm', validate})(LoginForm);
