import React from "react";
import { create } from "react-test-renderer";

import ProfileStatus from './ProfileStatus'

test("Span contains any status", () => {
    const root = create(<ProfileStatus />).root;
    const span = root.findByType("span");

    expect(span.children[0]).toBeTruthy();
})

test("updateStatus callback was called", () => {
    const mockCallback = jest.fn();
    const root = create(<ProfileStatus updateStatus={mockCallback}/>).root;

    const span = root.findByType("span");
    span.props.onClick();

    const input = root.findByType("input");
    input.props.onBlur();

    expect(mockCallback.mock.calls.length).toBe(1);
})