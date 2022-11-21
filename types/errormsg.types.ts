import { UserFailMessage } from "./users.types";

export interface ErrorMsgProps {
  error: UserFailMessage | null;
  onClose: () => void;
}
