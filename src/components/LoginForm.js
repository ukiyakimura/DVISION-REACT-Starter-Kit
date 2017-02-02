import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Field, reduxForm} from 'redux-form';

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
    
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      renderTextField,
      validation
    } = this.props;

    return (
      <Card className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="card-heading">Login</h2>

          <div className="field-line">
            <Field name="email" component={renderTextField} label="Email"/>
          </div>

          <div className="field-line">
            <Field name="password" component={renderTextField} label="Password"/>
          </div>

          <div className="button-line">
            <RaisedButton
              type="submit"
              disabled={pristine || submitting}
              label="Log in"
              primary/>
          </div>

          <CardText>Don't have an account?
            <Link to={'/signup'}>Create one</Link>.</CardText>
        </form>
      </Card>
    )
  }
};

LoginForm.propTypes = {   onSubmit: PropTypes.func.isRequired, };

LoginForm = reduxForm({form: 'LoginForm'})(LoginForm);

export default LoginForm;