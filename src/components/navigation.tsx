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
    return <nav className="navigation">
      <Link href="/">
        <a>
          <div className="home-link">
            <img src="/header-logo.svg" alt="Home"></img>
            <p>Delta Defense Blog</p>
          </div>
        </a>
      </Link>
    </nav>;
  }
}
