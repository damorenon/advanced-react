import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "components/App"; //because of set NODE_PATH=./lib&& in package.json

const serverRender = () => {
  return ReactDOMServer.renderToString(<App />);
};

export default serverRender;
