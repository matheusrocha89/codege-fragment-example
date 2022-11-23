import React from "react";
import { FragmentType, useFragment } from "../../gql";
import { ProfileName_PersonFragmentDoc } from "../../gql/graphql";

type ProfileNameProps = {
  profile: FragmentType<typeof ProfileName_PersonFragmentDoc>;
};

const ProfileName = ({ profile }: ProfileNameProps) => {
  const { name } = useFragment(ProfileName_PersonFragmentDoc, profile);
  return (
    <div>
      <h1>Person Name: {name}</h1>
    </div>
  );
};

export { ProfileName };
