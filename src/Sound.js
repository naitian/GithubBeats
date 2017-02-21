import React, { Component } from 'react';
import {Song, Sequencer, Synth} from 'react-music'

class Sound extends Component {
  render() {

    const contribs = this.props.contribs;
    const mat = [];
    const SCALE = ['b2', 'd2', 'f#2', 'b3', 'd3', 'f#3', 'g#3']
    while (contribs.length > 0) mat.push(contribs.splice(0, 7));

    const steps = []

    for (var col = 0, len = mat.length; col < len; col++) {
      const notes = []
      for (var note = 0, week = mat[col].length; note < week; note++) {
        if (mat[col][note].count > 0) 
          notes.push(SCALE[note]);
      }
      steps.push([col * 8, 4, notes])
    }

    return (
      <Song playing={true} tempo={200}>
        <Sequencer resolution={16} bars={27}>
          <Synth
            type="square"
            steps={ steps }
          />
        </Sequencer>
      </Song>
    );
  }
}

export default Sound;
