import React, { useReducer, createContext } from "react";

export const ContactContext = createContext();

const initialState = {
    contacts: [
        {
            id: "097",
            name: "Albert Hpal",
            email: "hpal@gmail.com",
        },
    {
      id: "098",
      name: "Diana Prince",
      email: "diana@gmail.com",
    },
    {
      id: "099",
      name: "Bruce Wayne",
      email: "bruce@hotmail.com",
    },
    {
      id: "100",
      name: "Clark Kent",
      email: "clark@yahoo.com",
        },
        {
            id: "101",
            name: "Kisa Kyamukama",
            email: "kisa@gmail.com",
        },
  ],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.payload],
      };
    case "DEL_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "START":
      return {
        loading: true,
      };
    case "COMPELETE":
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

export const ContactContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ContactContext.Provider value={[state, dispatch]}>
            {props.children}
        </ContactContext.Provider>
    )
}