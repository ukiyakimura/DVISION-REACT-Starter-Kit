import React from 'react';
import TextField from 'material-ui/TextField';

import { Field, reduxForm } from 'redux-form';
import {Card, CardText} from 'material-ui/Card';
import MUINormalTextField from '../helper/MUINormalTextField';
import MUIFloatingTextField from '../helper/MUIFloatingTextField';
import MUIHiddenTextField from '../helper/MUIHiddenTextField';
import { DatePicker } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

class PeriodForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        const { handleSubmit, pristine, reset, submitting } = this.props;
        return(
            <div>
                <Card className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="field-line">
                            <Field 
                                name="periodName" 
                                component={MUIFloatingTextField} 
                                label="Period Name" 
                                multiLine= {false}
                                type="text"
                            />
                        </div>

                        <div className="field-line">
                            <Field 
                                name="startDate" 
                                floatingLabelText="Start Date"
                                component={DatePicker} 
                                format={null}
                                onChange={(value) => {
                                    console.log('date changed ', value) // eslint-disable-line no-console
                                }} 
                                autoOk={true}
                                DateTimeFormat={Intl.DateTimeFormat}
                            />
                        </div>
                        
                        <div className="field-line">
                            <Field 
                                name="endDate" 
                                floatingLabelText="End Date"
                                component={DatePicker}
                                format={null} 
                                onChange={(value) => {
                                    console.log('date changed ', value) // eslint-disable-line no-console
                                }}
                                autoOk={true}
                                DateTimeFormat={Intl.DateTimeFormat}
                            />
                        </div>

                        <div className="field-line">
                            <Field 
                                name="remark" 
                                label="Remark" 
                                component={MUIFloatingTextField} 
                                type="text"
                            />
                        </div>

                        <div className="button-line">
                            <RaisedButton
                            type="submit"
                            disabled={pristine || submitting}
                            label="Submit"
                            />
                        </div>
                    </form>
                </Card>
            </div>
        )
    }
}

export default reduxForm({form: 'PeriodForm'})(PeriodForm);