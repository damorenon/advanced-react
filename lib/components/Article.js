import React from "react";
import propTypes from "prop-types";
import storeProvider from "./storeProvider";

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: "solid",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    fontSize: "0.85em",
    color: "#888",
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  },
};
const dateDisplay = (dateString) => new Date(dateString).toDateString();

//presentational component only, easier to test cause it no longer depends on teh global context API
const Article = (props) => {
  const { article, author } = props;
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{dateDisplay(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: propTypes.shape({
    title: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
  }),
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  };
}

export default storeProvider(extraProps)(Article);
