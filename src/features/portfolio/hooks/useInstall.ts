import { useEffect, useState } from 'react'

interface InstallPrompt extends Event {
  prompt(): Promise<unknown>
}

export function useInstall() {
  const [event, setEvent] = useState<InstallPrompt>()
  useEffect(() => {
    function capture(promptEvent: Event) {
      promptEvent.preventDefault()
      setEvent(promptEvent as InstallPrompt)
    }
    const clear = () => setEvent(undefined)
    window.addEventListener('beforeinstallprompt', capture)
    window.addEventListener('appinstalled', clear)
    return () => {
      window.removeEventListener('beforeinstallprompt', capture)
      window.removeEventListener('appinstalled', clear)
    }
  }, [])
  return (
    event &&
    (() => {
      setEvent(undefined)
      void event.prompt()
    })
  )
}
