// import TestRenderer from 'react-test-renderer';

import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="it-theme" />);
    //instanse - текущий экземпляр обьекта
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-theme");
  });
  test("after cteation span shoud be displayed", () => {
    const component = create(<ProfileStatus status="it-theme" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children.length).toBe(1);
    expect(span).not.toBeNull();
  });
  test("after cteation input shoudn't be displayed", () => {
    const component = create(<ProfileStatus status="it-theme" />);
    const root = component.root;
    expect(()=>{
        let input = root.findByType("input");
    }).toThrow()
  });
  test("after cteation span shoud be contains status", () => {
    const component = create(<ProfileStatus status="it-theme" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("it-theme");
  });
  test("input shoud be displayed in editMode instead span", () => {
    const component = create(<ProfileStatus status="it-theme" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick()
    let input = root.findByType("input");

    expect(input.props.value).toBe("it-theme");
  });
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="it-theme" updateStatus={mockCallback}/>);
    const instance = component.getInstance();
    instance.deactivateEditMode()

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
