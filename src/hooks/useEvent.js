import { useEffect } from "react"
import { off, on } from "../events"

export default function useEvent(target, event, handler) {
  useEffect(() => {
    const targetEl = target && 'current' in target ? target.current : target
    if (!targetEl) return

    on(targetEl, event, handler)
    return () => off(targetEl, event, handler)
  }, [event, target, handler])
}
