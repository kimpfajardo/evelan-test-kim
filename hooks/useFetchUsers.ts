import { UserSuccessResponse, FetchUser, UserFailMessage } from "../types/users.types";

export const useFetchUsers = () => {
  const fetchUsers = async (
    pageNum: number
  ): Promise<UserSuccessResponse | UserFailMessage> => {
    try {
      const res: Response = await fetch(
        `https://reqres.in/api/users?page=${pageNum}`
      );
      const response: UserSuccessResponse = await res.json();

      return response;
    } catch (err) {
      return {
        error: true,
        code: 400,
        message: "An error has occurred. Please try again later.",
      };
    }
  };

  return {
    fetchUsers,
  };
};
