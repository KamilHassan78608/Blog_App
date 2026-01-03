import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {

  const [darkMode, setdarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  const [activeCategory, setactiveCategory] = useState("All")

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setdarkMode,
        activeCategory,
        setactiveCategory
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
