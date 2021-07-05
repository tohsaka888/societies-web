import React from "react";
export const DisplayContext =
    React.createContext<React.Dispatch<React.SetStateAction<Boolean>> | null>(null);
export const IsDisplayContext = React.createContext<Boolean>(false)