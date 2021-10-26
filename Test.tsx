import * as React from 'react';

class Test extends React.Component<any, {passed: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = {passed: false};
  }
  public componentDidMount() {
    if(!this.props.relation || this.props.relation === "equals") {
      this.setState({
        passed: this.props.expected === this.props.actual
      });
    }
    else if(this.props.relation === "shallow copy" && this.props.expected instanceof Array) {
      this.setState({
        passed: this.props.actual instanceof Array && this.props.actual.length === this.props.expected.length &&this.props.expected.every((item, index) => item === this.props.actual[index])
      }); 
    }
  }
  public render() {
    const colorStyle = {
      backgroundColor: this.state.passed ? 'rgba(0,255,0,0.25)' : 'rgba(255,0,0,0.25)'
    };
    return (
      <tr style={colorStyle}>
        <td>{this.props.testname}</td>
        <td>{(this.props.expected !== null && typeof this.props.expected !== "undefined") ? this.props.expected.toString() : "ERROR - UNDEFINED OR NULL"}</td>
        <td>{(this.props.actual !== null && typeof this.props.actual !== "undefined") ? this.props.actual.toString() : "ERROR - UNDEFINED OR NULL"}</td>
      </tr>
    );
  }
}

export default Test;