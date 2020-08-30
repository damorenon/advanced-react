import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    answer: 42,
  };

  asyncFunction = () => {
    return Promise.resolve(37);
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunction(),
    });
  }

  render() {
    return <div>Hello!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
