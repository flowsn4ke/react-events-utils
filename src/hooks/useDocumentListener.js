import useEvent from "./useEvent"

export default function useDocumentListener(event, handler) {
  useEvent(document, event, handler)
}
