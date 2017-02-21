import React, { Component } from 'react';
import moment from 'moment';
import './styles/UserEntry.css';

const FORMAT = 'YYYY-MM-DD';
let today = moment();
// let yearago = today.clone().subtract(1, 'years');

class UserEntry extends Component {
  render() {
    return (
      <form action='/listen' method='GET'>
        <input required placeholder="Github Username" name="user" type="text"/>
        {/* <input className="date-entry" name="start" defaultValue={ yearago.format(FORMAT) } type="text"/> */}
        <input className="date-entry" name="end" defaultValue={ today.format(FORMAT) } type="text"/>
        * Disclaimer: I have no idea how the dates translate into the actual dates...
        <input type="submit" value="Let's Jam"/>
      </form>
    );
  }
}

export default UserEntry;
