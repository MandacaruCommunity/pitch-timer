import React, {Component} from 'react';
import Info from './components/Info';
import Counter from './components/Counter';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Info title="Pitch Timer" lead="by Mandacaru Community 🌵" />
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
