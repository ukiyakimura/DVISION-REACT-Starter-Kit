import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

export default class PeriodTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
      periodData: this.props.periodData
    };
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >

          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="5" style={{textAlign: 'center'}}>
                Period List
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>Number</TableHeaderColumn>
              <TableHeaderColumn>Period</TableHeaderColumn>
              <TableHeaderColumn>Start Date</TableHeaderColumn>
              <TableHeaderColumn>End Date</TableHeaderColumn>
              <TableHeaderColumn>Remark</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.periodData.map( (data, index) => (
              <TableRow key={index} selected={data.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{data.periodeName}</TableRowColumn>
                <TableRowColumn>{data.startDate}</TableRowColumn>
                <TableRowColumn>{data.endDate}</TableRowColumn>
                <TableRowColumn>{data.remark}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>

        </Table>
        </div>
    )
}
}