import { Dispatch, SetStateAction } from "react";

export interface User {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface UserSuccessResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: UserSuccessResponseSupport;
}

export interface UserSuccessResponseSupport {
  url: string;
  text: string;
}

export interface UsersProps {
  initialData: User[];
  initialError: UserFailMessage;
}

export interface UserFailMessage {
  message: string;
  code: number;
  error: boolean;
}

export type FetchUser = (
  pageNum: number
) => Promise<UserSuccessResponse | UserFailMessage>;

export interface UsersLoaderProps {
  setError: Dispatch<SetStateAction<UserFailMessage | null>>;
  setPage: Dispatch<SetStateAction<number>>;
  isLoadable: boolean;
  page: number;
}

export interface UsersContainerProps {
  users: User[];
}

export interface UsersListProps {
  initialData: User[];
  initialError: UserFailMessage;
}
