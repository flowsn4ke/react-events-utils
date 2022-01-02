import { useEffect } from "react"
import { off, once } from "./events"

export default function useEventOnce(target, event, handler) {
  useEffect(() => {
    once(target, event, handler)
    return () => off(target, event, handler)
  }, [event])
}
