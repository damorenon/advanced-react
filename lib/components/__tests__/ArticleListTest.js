import React from "react";
import ArticleList from "../ArticleList";

import renderer from "react-test-renderer";

describe("ArticleLsit", () => {
  const testProps = {
    articles: {
      a: { a: "a" },
      b: { b: "b" },
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({})),
    },
  };

  it("renders correctly", () => {
    const tree = renderer.create(<ArticleList {...testProps} />).toJSON();
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});
