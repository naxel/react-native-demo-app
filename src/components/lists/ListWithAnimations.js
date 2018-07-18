import React from 'react';
import {
  Animated,
} from 'react-native';

export default class ListWithAnimations extends React.Component {
  constructor(props) {
    super(props);
    this.listLength = 3;
    this.selected = false;
    this.animatedValues = [];
  }

  componentWillMount() {
    for (let i = 0; i < this.listLength; i += 1) {
      this.animatedValues.push(new Animated.Value(0));
    }
    this.currentValues = new Array(this.listLength).fill(0);
  }

  animateSelect(num) {
    if (this.selected !== false && this.selected !== num) {
      // reset old
      this.currentValues[this.selected] = 0;
      Animated.timing(this.animatedValues[this.selected], {
        toValue: 0,
        duration: 300,
      }).start();
    }

    this.currentValues[num] = +!this.currentValues[num] * 100;
    Animated.timing(this.animatedValues[num], {
      toValue: this.currentValues[num],
      duration: 300,
    }).start();

    this.selected = (this.currentValues[num]) ? num : false;
  }

  // eslint-disable-next-line class-methods-use-this
  renderRow() {
    return null;
  }

  renderRows() {
    const self = this;
    const rows = [];

    for (let i = 0; i < this.listLength; i += 1) {
      rows.push(
        (function (num) {
          return self.renderRow(num);
        }(i)),
      );
    }
    return rows;
  }

  render() {
    return this.renderRows();
  }
}
