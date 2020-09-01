import React from "react";
import ReactDOM from "react-dom";

import App from "components/App"; //because of set NODE_PATH=./lib&& in package.json

ReactDOM.render(<App />, document.getElementById("root"));

export default App;