import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import {connect} from 'react-redux';

import {getPeriod} from '../actions/setup.action';
import { getSetupTabTitles } from '../actions/comp.action';

import PeriodForm from '../components/PeriodForm';
import PeriodTable from '../components/PeriodTable';

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
    this.props.getPeriod('1');
    this.props.getSetupTabTitles('Setup');
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
    return (
      <div>
        <Tabs // this one to render the tab titles
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          {this.props.setupTabTitles.map((data, i) => 
            <Tab label={data.tabTitle} value={i} key={i}/>
          )}
        </Tabs>

        <SwipeableViews // this one to render each tab content
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          {this.props.setupTabTitles.map((data, i) => {
            if(data.tabTitle == 'Periodic'){
              return(
                <div style={styles.slide}>
                    <PeriodForm />
                    <PeriodTable periodData={this.props.periodData} />
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
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        setupTabTitles: state.comp.setupTabTitles,
        periodData: state.setup.periodData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPeriod: (isActive) => {
            dispatch(getPeriod(isActive))
        },
        getSetupTabTitles:(category) => {
            dispatch(getSetupTabTitles(category))
        }
    }
}

export default SetupPage = connect(mapStateToProps, mapDispatchToProps)(SetupPage);