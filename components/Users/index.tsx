import {
  User,
  UserFailMessage,
  UsersListProps,
  UserSuccessResponse,
} from "../../types/users.types";
import ErrorMsg from "../Status/error";
import { useEffect, useState } from "react";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import UsersContainer from "./UsersContainer";
import UsersLoader from "./UsersLoader";

const UsersList = (props: UsersListProps) => {
  const { initialData, initialError } = props;

  const [users, setUsers] = useState<User[]>(initialData);
  const [error, setError] = useState<UserFailMessage | null>(initialError);
  const [isLoadable, setIsLoadable] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const { fetchUsers } = useFetchUsers();

  useEffect(() => {
    if (page > 1) {
      fetchUsers(page)
        .then((value: UserFailMessage | UserSuccessResponse) => {
          const data = value as UserSuccessResponse;
          setUsers([...users, ...data.data]);
          if (data.total_pages >= page) {
            setIsLoadable(false);
          }
        })
        .catch((err: UserFailMessage) => {
          if (err.error) {
            setError(err);
          }
        });
    }
  }, [page]);

  return (
    <main>
      <ErrorMsg error={error} onClose={() => setError(null)} />
      <UsersContainer users={users} />
      <UsersLoader
        setError={setError}
        setPage={setPage}
        isLoadable={isLoadable}
        page={page}
      />
    </main>
  );
};

export default UsersList;
