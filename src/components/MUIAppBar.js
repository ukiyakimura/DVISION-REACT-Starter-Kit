import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import {browserHistory} from 'react-router';

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
  let newProps = Object.assign({}, props);
     delete newProps.logout;

  const doLogout = () => {
    props.logout().then(() => browserHistory.push('/'));
  }

  return(
    <IconMenu
      {...newProps}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" 
        onTouchTap={doLogout}
      />
    </IconMenu>
  )
};

Logged.muiName = 'IconMenu';

class MUIAppBar extends React.Component {
  // why i don't use state as if option in iconElementRight, because it not realtime updated as the state in store update 
  // state = {
  //   logged: (this.props.authenticated),  
  // };

  render() {
  // when user hover the title it would turn into pointer
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };
    const { logoutUser } = this.props;
    // console.log(this.state.logged);
    return (
      <div>
        <AppBar
          title={<span style={styles.title}><IndexLink to="/">D:Vision</IndexLink></span>}
          iconElementRight={this.props.authenticated ? <Logged logout={logoutUser} /> : <Login />}
        />  
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        authenticated:state.auth.authenticated
    }
}

// I'm using this format to make it return promise properly
function mapDispatchToProps(dispatch) {
    return {
        logoutUser: logoutUser(dispatch)
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         logoutUser: () => (
//             dispatch(logoutUser)
//         ),
//     }
// }

export default MUIAppBar =  connect(mapStateToProps, mapDispatchToProps)(MUIAppBar);