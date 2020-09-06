import React from "react";
import PropTypes from "prop-types";
import pickBy from "lodash.pickby";

import ArticleList from "./ArticleList";
import SearchBar from "./SeachBar";
import Timestamp from "./Timestamp";

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  };

  state = this.appState();

  onStoreChange = () => {
    //this way, component's state will be always in sync with store's state
    this.setState(this.appState);
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.starClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let { articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, "i");
    if (searchTerm) {
      // eslint-disable-next-line no-unused-vars
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
