import useEvent from "./useEvent"

export default function useDocumentListener(event, handler) {
  useEvent(typeof window !== "undefined" ? document : null, event, handler)
}
