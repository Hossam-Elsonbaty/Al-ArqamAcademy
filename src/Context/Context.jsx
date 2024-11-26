import React,{createContext, useState} from 'react';
const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [firstName, setFirstName] = useState()
  return (
    <AppContext.Provider value={{firstName}}>
      {children}
    </AppContext.Provider>
  )
}
