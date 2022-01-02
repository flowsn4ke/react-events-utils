import { useEffect } from "react"
import { off, once } from "./events"

export default function useDocumentListenerOnce(event, handler) {
  useEffect(() => {
    once(event, handler)
    return () => off(event, handler)
  }, [event])
};
