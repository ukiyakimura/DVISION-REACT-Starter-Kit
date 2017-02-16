import React from 'react';
import { Link, IndexLink } from 'react-router';
import {browserHistory} from 'react-router';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class MUIDrawerAppBar extends React.Component {

    constructor(props) {
        super(props);
    }

    redirect = () => {
        this.props.doToggle(!this.props.openDrawerStatus);
        browserHistory.push('/setup');
    }

    render() {
    return (
        <div>
        <Drawer
            docked={false}
            width={200}
            open={this.props.openDrawerStatus}
            onRequestChange={(open) => this.props.doToggle(open)}
        >
            <MenuItem onTouchTap={this.redirect}>Setup</MenuItem>
        </Drawer>
        </div>
    );
    }
}