import React, { Dispatch, SetStateAction } from "react";

export type ThemeContextData = {
  darkModeOn: boolean | Dispatch<SetStateAction<boolean>>;
  setDarkModeOn: Dispatch<SetStateAction<boolean>>;
};

export const ThemeContext = React.createContext<ThemeContextData>({
  darkModeOn: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDarkModeOn: (darkModeOn: boolean | SetStateAction<boolean>) => {}
});
