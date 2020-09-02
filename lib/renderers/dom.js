import React from "react";
import ReactDOM from "react-dom";
import StateApi from "../StateApi";

import App from "components/App"; //because of set NODE_PATH=./lib&& in package.json

const store = new StateApi(window.initialData);

ReactDOM.render(<App store={store} />, document.getElementById("root"));

export default App;
