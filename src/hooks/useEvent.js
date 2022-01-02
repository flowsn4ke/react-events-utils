import { useEffect } from "react"
import { off, on } from "../events"

export default function useEvent(target, event, handler) {
  useEffect(() => {
    target = target && 'current' in target ? target.current : target
    if (!target) return

    on(target, event, handler)
    return () => off(target, event, handler)
  }, [event, target])
}
