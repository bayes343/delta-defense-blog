import * as React from 'react';
import { Component, ReactNode } from 'react';

interface Props {}
interface State {}

export class Footer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render(): ReactNode {
    return <div className="footer">
      <p>Created by: <a href="https://josephbayes.net/" target="blank">Joseph Bayes (Joey)</a></p>
    </div>;
  }
}
