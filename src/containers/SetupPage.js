import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import {connect} from 'react-redux';

import {getPeriod} from '../actions/setup.action';
import { createPeriod } from '../actions/setup.action';
import { getSetupTabTitles } from '../actions/comp.action';

import PeriodForm from '../components/SetupPage/PeriodForm';
import PeriodTable from '../components/SetupPage/PeriodTable';

import Loader from 'react-loader';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

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
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    const {loadedTab, loadedPeriod, setupTabTitles, periodData, createPeriod} = this.props;
    return (
      <div>
        <Loader loaded={loadedTab}>
          <Tabs // this one to render the tab titles
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            {setupTabTitles.map((data, i) => 
              <Tab label={data.tabTitle} value={i} key={i}/>
            )}
          </Tabs>

          <SwipeableViews // this one to render each tab content
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            {setupTabTitles.map((data, i) => {
              if(data.tabTitle == 'Periodic'){
                return(
                  <div style={styles.slide}>
                    <Loader loaded={loadedPeriod}>
                      <PeriodForm createPeriod={createPeriod} />
                      <PeriodTable periodData={periodData} />
                    </Loader>
                  </div>
              )}else{
                return(
                  <div style={styles.slide}>
                      test2
                  </div>
                )
              }
              })         
            }
          </SwipeableViews>
        </Loader>
      </div>
    );
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