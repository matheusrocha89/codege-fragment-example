import { render, screen } from "@testing-library/react";
import { ProfileName } from "./ProfileName";

describe("<ProfileName />", () => {
  it("renders correctly", () => {
    const profile = { name: "Adam" };
    render(<ProfileName profile={profile} />);

    expect(screen.getByText("Person Name: Adam")).toBeInTheDocument();
  });
});
