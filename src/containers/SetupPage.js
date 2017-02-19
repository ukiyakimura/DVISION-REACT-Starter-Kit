import React from 'react';
import {connect} from 'react-redux';

import {getPeriod} from '../actions/setup.action';
import { createPeriod } from '../actions/setup.action';
import { getSetupTabTitles } from '../actions/comp.action';

import MUITabs from '../components/SetupPage/MUITabs';
import PeriodForm from '../components/SetupPage/PeriodForm';
import PeriodTable from '../components/SetupPage/PeriodTable';

class SetupPage extends React.Component {

  componentWillMount(){
    if(this.props.setupTabTitles[0] == null){
      this.props.getSetupTabTitles('Setup');
    }
    if(this.props.periodData.length < 2){ 
      this.props.getPeriod('1');
    }
  }

  constructor(props) {
    super(props);
    this.processForm = this.processForm.bind(this);
    this.onRowSelection = this.onRowSelection.bind(this);
  }

  processForm(data) {
    this.props.createPeriod(data);
  }

  onRowSelection(key) {
    console.log(key, this.props.periodData[key]);
  }

  render() {
    const {loadedTab, loadedPeriod, setupTabTitles, periodData} = this.props;
    return (
      <MUITabs
        loadedTab={loadedTab} 
        loadedPeriod={loadedPeriod}
        setupTabTitles={setupTabTitles}
        tabContent={
          <div>
            <PeriodForm onSubmit={this.processForm} />
            <PeriodTable periodData={periodData} onRowSelection={this.onRowSelection}/>
          </div>
        }
      />   
    )
  }
}

function mapStateToProps(state) {
    return {
        setupTabTitles: state.comp.setupTabTitles,
        periodData: state.setup.periodData,
        loadedTab: !state.comp.api.isLoading,
        loadedPeriod: !state.setup.api.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSetupTabTitles:(category) => {
            dispatch(getSetupTabTitles(category))
        },
        getPeriod: (isActive) => {
            dispatch(getPeriod(isActive))
        },
        createPeriod: (data) => {
            dispatch(createPeriod(data))
        }
    }
}

export default SetupPage = connect(mapStateToProps, mapDispatchToProps)(SetupPage);