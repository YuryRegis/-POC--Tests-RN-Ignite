import React from "react";
import { render } from "@testing-library/react-native";

import Profile from "../../src/screens/Profile";

describe("Profile test suit", () => {
  it("Should input name placeholder render correctly", () => {
    const { getByPlaceholderText } = render(<Profile />);
    const inputName = getByPlaceholderText("Enter your name");

    expect(inputName.props.placeholder).toBeTruthy();
  });

  it("Should load user data correctly", () => {
    const { getByTestId } = render(<Profile />);
    const inputName = getByTestId("input-name");
    const inputSurname = getByTestId("input-surname");

    expect(inputName.props.value).toEqual("Harry");
    expect(inputSurname.props.value).toEqual("Potter");
  });

  it("Should render title correctly", () => {
    const { getByTestId } = render(<Profile />);
    const textTitle = getByTestId("text-title");

    expect(textTitle.props.children).toContain("Perfil");
  });
});
