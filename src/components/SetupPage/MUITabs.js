import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

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

export default class MUITabs extends React.Component{
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

    render(){
        const {loadedTab, loadedPeriod, setupTabTitles, tabContent} = this.props;
        return(
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
                                    {tabContent}
                                </Loader>
                            </div>
                        )}else{
                            return(
                            <div style={styles.slide}>
                                test2
                            </div>
                            )
                        }
                    })}
                </SwipeableViews>
                </Loader>
            </div>
        )
    }
}