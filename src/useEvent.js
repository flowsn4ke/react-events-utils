import { useEffect } from "react"
import { off, on } from "./events"

export default function useEvent(target, event, handler) {
  useEffect(() => {
    on(target, event, handler)
    return () => off(target, event, handler)
  }, [event])
}
