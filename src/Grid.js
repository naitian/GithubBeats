import React, { Component } from 'react';
import './styles/ChartTheme.css';
import Calendar from 'react-github-contribution-calendar';

class Grid extends Component {

  render() {
    let contribs = this.props.contribs.slice(0);
    let endDate =  (contribs.length > 0) ? contribs[contribs.length - 1].date : (new Date()).toDateString();

    let values = {};
    var weekNames = ['', '', '', '', '', '', ''];
    var monthNames = [
          '', '', '', '', '', '',
              '', '', '', '', '', ''
    ];
    var panelColors = [
      '#EEEEEE',
      '#d6e685',
      '#8cc665',
      '#44a340',
      '#1e6823',
    ];

    for (var i = 0, len = contribs.length; i < len; i++) {
      values[contribs[i].date] = contribs[i].count;
    }

    console.log(endDate)
    return (
      <Calendar 
        values={values} 
        until={endDate} 
        weekNames={weekNames} 
        monthNames={monthNames} 
        panelColors={panelColors}
      />
    );
  }
}

export default Grid;
