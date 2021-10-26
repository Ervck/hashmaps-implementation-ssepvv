import * as React from 'react';

class TestSuite extends React.Component<any> {
  public render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>{this.props.suitename}</th>
            <th>Expected</th>
            <th>Actual</th>
          </tr>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

export default TestSuite;