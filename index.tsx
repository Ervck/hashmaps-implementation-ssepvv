import React, { Component } from 'react';
import display from './display';
import { render } from 'react-dom';
import ExerciseTests from './ExerciseTests';
import Hello from './Hello';
import './style.css';
import './App.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <pre id="output">
          OUTPUT: <br />
        </pre>
        <ExerciseTests />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

display("hey");
