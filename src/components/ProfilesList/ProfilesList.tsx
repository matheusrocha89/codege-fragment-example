import React from "react";
import { useQuery } from "@apollo/client";

import { GetPeopleDocument } from "../../gql/graphql";

import { Profile } from "../Profile";

const ProfilesList = () => {
  const { data, loading, error } = useQuery(GetPeopleDocument);

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    console.error(error);
    return <h1>Error!</h1>;
  }

  return (
    <>
      {data?.allPeople?.edges?.map(edge => {
        return <Profile profile={edge?.node} />;
      })}
    </>
  );
};

export { ProfilesList };
