import { useCallback, useEffect, useRef, useState } from 'react'
import logger from '@harrytwright/logger'

const useBlur = (timeout = 200) => {
  const blur = useRef(null)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    return () => {
      logger.silly('useBlur', 'removing timeout')
      blur.current && clearTimeout(blur.current)
    }
  }, [blur])

  const handleFocus = useCallback(() => {
    setFocus(true)
  }, [])

  const handleBlur = useCallback(() => {
    blur.current = setTimeout(() => {
      setFocus(false)
    }, timeout)
  }, [timeout, blur])

  return [focus, handleFocus, handleBlur]
}

export default useBlur
