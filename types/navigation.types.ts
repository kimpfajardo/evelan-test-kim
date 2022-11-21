import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

export type NavigationOnClickEvent = React.MouseEvent<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  MouseEvent
>;

export interface MobileNavigationProps {
  visible: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
  handleClick: (e: NavigationOnClickEvent) => void;
  router: NextRouter;
}