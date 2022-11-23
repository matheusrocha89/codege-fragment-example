import React from "react";
import type { FragmentType } from "../../gql";
import { useFragment } from "../../gql";
import { Profile_PersonFragmentDoc } from "../../gql/graphql";
import { ProfileName } from "../ProfileName";

type ProfileProps = {
  profile?: FragmentType<typeof Profile_PersonFragmentDoc> | null;
};

const Profile = (props: ProfileProps) => {
  const profile = useFragment(Profile_PersonFragmentDoc, props.profile);

  if (!profile) return null;

  return (
    <ul>
      <li>Id: {profile.id}</li>
      <ProfileName profile={profile} />
      <li>Gender: {profile.gender}</li>
    </ul>
  );
};

export { Profile };
