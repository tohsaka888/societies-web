import React, { createContext } from "react";

type LoginUser = {
  loginUser: string;
  setLoginUser: any;
};

export const LoginUserContext = createContext<LoginUser>({
  loginUser: "",
  setLoginUser: "",
});
export const DisplayContext = React.createContext<React.Dispatch<
  React.SetStateAction<Boolean>
> | null>(null);
export const IdContext = createContext<string>("");
export const IsDisplayContext = React.createContext<Boolean>(false);