import React, { createContext } from "react";

const urlProvider = createContext();
export function UrlProvider() {
  const url = "http://localhost:5000";
  return <urlProvider.Provider value={{ url }}></urlProvider.Provider>;
}

export const useUrl = () => {
  const context = React.useContext(urlProvider);
  if (context === undefined) {
    throw new Error("useUrl must be used within a UrlProvider");
  }
  return context;
};
