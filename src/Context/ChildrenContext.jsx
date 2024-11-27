/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';

export const ChildrenContext = createContext();

export const ChildrenProvider = ({ children }) => {
  const [childrenState, setChildrenState] = useState([
    {
      child: {
        id:0,
        firstName: "",
        LastName: "",
        dob: "",
        gender: "",
        selectedProgram: "",
      },
    },
  ]);
  const addChild = (id,firstName,lastName,dob,gender,selectedProgram) => {
    setChildrenState([
      ...childrenState,
      {
        child: {
          id:0,
          firstName: "",
          LastName: "",
          dob: "",
          gender: "",
          selectedProgram: "",
        },
      },
    ]);
  };
  const removeChild = (index) => {
    setChildrenState(children.filter((_, i) => i !== index));
  };
  const updateChild = (index, field, value) => {
    setChildrenState(
      childrenState.map((childObj, i) =>
        i === index-1
          ? {
              child: {
                ...childObj.child,
                [field]: value,
              },
            }
          : childObj
      )
    );
    console.log(childrenState);
    
  };
  return (
    <ChildrenContext.Provider value={{ childrenState, setChildrenState, updateChild }}>
      {children}
    </ChildrenContext.Provider>
  );
};
