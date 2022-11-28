import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

export interface MobileNavigationProps {
  visible: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
  handleClick: () => void;
  router: NextRouter;
}