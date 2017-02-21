import React, { Component } from 'react';
import Grid from './Grid.js'
import Sound from './Sound.js'

class Listen extends Component {
  constructor () {
    super();
    this.state = {
      contributions: []
    };
  }

  componentWillMount () {
    const query = this.props.location.query
    fetch(`http://localhost:3001/?name=${query.user}&to=${query.end}`)
      .then((res) => {
        console.log('whooo')
        return res.json()
      })
      .then((res) => {
        this.setState({contributions: res})
      })
  }

  render() {
    return (
      <div className="Listen">
        <Grid contribs={ this.state.contributions }/>
        <Sound contribs={ this.state.contributions }/>
      </div>
    );
  }
}

export default Listen;
