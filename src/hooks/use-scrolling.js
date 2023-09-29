import { useEffect, useState } from 'react'

export const useScrolling = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollDirection, setScrollDirection] = useState(1) // 1 up, -1 down

  useEffect(() => {
    let previousScrollPosition = scrollPosition
    let ticking = false

    const handleScroll = e => {
      setScrollDirection(previousScrollPosition < window.scrollY ? -1 : 1)
      previousScrollPosition = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(function () {
          setScrollPosition(previousScrollPosition)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  
  return { scrollDirection, scrollPosition }
}