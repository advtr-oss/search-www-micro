import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const useTheme = () => {
  const themeContext = useContext(ThemeContext)
  if (!themeContext) console.error('Must not be inside a theme provider')
  return themeContext
}

export default useTheme
