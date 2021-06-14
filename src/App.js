import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    // state定義
    this.state = {name: '犬派'};
  }
  
  handleClick(name) {
    // stateの値を変更する際、this.state = {}; で直接代入はアンチパターン
    this.setState({name: name});
  }
  
  render() {
    // return直下は1つのHTML要素のみ指定可能
    return (
    	<div>
    	  <h1>私は、{this.state.name}です！</h1>
        <button onClick={() => {this.handleClick('犬派')}}>犬派</button>
        <button onClick={() => {this.handleClick('猫派')}}>猫派</button>
      </div>
    );
  }
}

export default App;
