import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {

  const [darkMode, setdarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setdarkMode
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
