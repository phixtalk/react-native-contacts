import React, { createContext, useReducer } from "react";
import authInitialState from "./initialStates/authState";
import contactInitialState from "./initialStates/contactsState";
import auth from "./reducers/auth";
import contacts from "./reducers/contacts";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactState, contactDispatch] = useReducer(
    contacts,
    contactInitialState
  );
  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        contactState,
        contactDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
