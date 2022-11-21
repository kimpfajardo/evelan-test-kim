import React from "react";
import Layout from "../../components/Layout";
import UsersList from "../../components/Users";
import { UsersProps, UserSuccessResponse } from "../../types/users.types";

export default function Users(props: UsersProps) {
  const { initialData, initialError } = props;

  return (
    <Layout title={"Users"}>
      <UsersList initialData={initialData} initialError={initialError} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://reqres.in/api/users?page=1");

  if (res.status === 200) {
    const { data }: UserSuccessResponse = await res.json();
    return {
      props: {
        initialData: data,
        initialError: null,
      },
    };
  } else {
    return {
      props: {
        initialData: [],
        initialError: {
          message: "An error occurred. Please refresh the page",
          code: res.status,
        },
      },
    };
  }
}
