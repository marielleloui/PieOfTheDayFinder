import React from "react";
import { configure, shallow } from "enzyme";
import Pie from "./Pie";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Pie />", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Pie />);
  });
  it("should hide additional details on default", () => {
    const wrapper = component.find(".hide");
    expect(wrapper).toHaveLength(4);
  });

  it("should show additional details if visibility is set to true", () => {
    component.setState({ visibility: true });
    const wrapper = component.find(".show");
    expect(wrapper).toHaveLength(4);
  });

  it("should render button text as 'Learn More' on default", () => {
    const wrapper = component.find("#btn");
    expect(wrapper.prop('children')).toEqual('Learn More');
  });

  it("should render button text as 'Collapse' if visibility is set to true", () => {
    component.setState({ visibility: true });
    const wrapper = component.find("#btn");
    expect(wrapper.prop('children')).toEqual('Collapse');
  });
});
