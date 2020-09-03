import React from "react";
import ArticleList from "../ArticleList";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
describe("ArticleList", () => {
  const testProps = {
    articles: {
      a: { a: "a" },
      b: { b: "b" },
    },
  };

  it("renders correctly", () => {
    const wrapper = shallow(<ArticleList {...testProps} />);
    expect(wrapper.find("ArticleContainer").length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
