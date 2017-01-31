import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <IndexLink to="/">React App</IndexLink>
          </div>

          <div className="top-bar-right">
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
