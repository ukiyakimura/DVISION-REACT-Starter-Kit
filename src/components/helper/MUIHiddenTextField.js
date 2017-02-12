import React from 'react';
import { TextField } from 'redux-form-material-ui'


const styles = {
    visibility: {
        visibility: "hidden"
    },
};

const MUIHiddenTextField = props => (
    <div>
        <TextField
            style={styles.visibility}
        />
    </div>
)

export default MUIHiddenTextField;