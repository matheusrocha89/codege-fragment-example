import { makeFragmentData } from "../../gql";
import { ProfileName_PersonFragmentDoc } from "../../gql/graphql";
import { render, screen } from "@testing-library/react";
import { ProfileName } from "./ProfileName";

describe("<ProfileName />", () => {
  it("renders correctly", () => {
    const profile = { name: "Adam" };
    render(
      <ProfileName
        profile={makeFragmentData(profile, ProfileName_PersonFragmentDoc)}
      />
    );

    expect(screen.getByText("Person Name: Adam")).toBeInTheDocument();
  });
});
