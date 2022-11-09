import React from "react";

import { useGetPeopleQuery } from "@/graphql.types";
import { Profile } from "@/components/Profile";

const ProfilesList = () => {
  const { data, loading, error } = useGetPeopleQuery();

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    console.error(error);
    return <h1>Error!</h1>;
  }

  console.log(data);

  return (
    <>
      {data?.allPeople?.edges?.map(profile => (
        <Profile profile={profile} />
      ))}
    </>
  );
};

export { ProfilesList };
