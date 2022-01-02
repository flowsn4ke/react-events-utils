import useEventListener from "./useEvent"

export default function useDocumentListener(event, handler) {
  useEventListener(document, event, handler)
}
