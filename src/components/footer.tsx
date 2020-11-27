import * as React from 'react';
import { Component, ReactNode } from 'react';

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render(): ReactNode {
    return <div className="footer">
      <p>Created by: <a href="https://josephbayes.net/" target="blank">Joseph Bayes (Joey)</a></p>
    </div>;
  }
}
