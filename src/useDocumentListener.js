import { useEffect } from "react"
import { off, on } from "./events"

export default function useDocumentListener(event, handler) {
  useEffect(() => {
    on(event, handler)
    return () => off(event, handler)
  }, [event])
}
