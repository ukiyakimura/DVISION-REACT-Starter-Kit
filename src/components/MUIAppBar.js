import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth.action';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Login extends React.Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login"
        containerElement={<Link to="/login">Setup</Link>}
        linkButton={true}
      />
    );
  }
}

const Logged = (props) => {
  const {logout} = props
  return(
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" 
        onTouchTap={logout}
      />
    </IconMenu>
  )
};

Logged.muiName = 'IconMenu';

class MUIAppBar extends React.Component {
    
  state = {
    logged: (localStorage.getItem('laravel_user_token') !== null),
  };

  render() {
  // when user hover the title it would turn into pointer
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };
    const { logoutUser } = this.props;

    return (
      <div>
        <AppBar
          title={<span style={styles.title}><IndexLink to="/">D:Vision</IndexLink></span>}
          iconElementRight={this.state.logged ? <Logged logout={logoutUser} /> : <Login />}
        />  
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => (
            dispatch(logoutUser)
        )
    }
}

export default MUIAppBar =  connect(null, mapDispatchToProps)(MUIAppBar);