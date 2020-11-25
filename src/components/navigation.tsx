import * as React from 'react';
import { Component, ReactNode } from 'react';
import Link from 'next/link';

interface Props {}
interface State {}

export class Navigation extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render(): ReactNode {
    return <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/authors">Authors</Link></li>
      </ul>
    </nav>;
  }
}
