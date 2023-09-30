import React, { Dispatch, SetStateAction } from "react";

type navbarContextType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};
export const navbarContext = React.createContext<navbarContextType>({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
});
