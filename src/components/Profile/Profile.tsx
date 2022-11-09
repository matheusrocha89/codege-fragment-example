import React from "react";
import type { FragmentType } from "@/gql";
import type { Profile_PersonFragment } from "@/graphql.types";
import { useFragment } from "@/gql";
import { Profile_PersonFragmentDoc } from "@/graphql.types";

type ProfileProps = {
  profile: FragmentType<typeof Profile_PersonFragmentDoc>;
};

const Profile = (props: ProfileProps) => {
  const { id, name, gender } = useFragment<Profile_PersonFragment>(
    Profile_PersonFragmentDoc,
    props.profile
  );

  return (
    <ul>
      <li>Id: {id}</li>
      <li>Name: {name}</li>
      <li>Gender: {gender}</li>
    </ul>
  );
};

export { Profile };
